from knox.models import AuthToken
from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView

from .serializers import *


class PostListView(ListAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer


# No need right now.
class PostCreateView(CreateAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostCreateSerializer

    def perform_create(self, serializer):
        if serializer.is_valid():
            obj = serializer.save()
            post = PostsSerializer(obj)
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def create_post(request):
    if request.method == "POST":
        serializer = PostCreateSerializer(data=request.data)
        if serializer.is_valid():
            obj = serializer.save()
            post = PostsSerializer(obj)
            return Response(data=post.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostDeleteView(DestroyAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer


# Register API
class RegisterAPI(GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# Login API
class LoginAPI(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


# Get User API
class UserAPI(RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
