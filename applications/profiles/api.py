from .models import Posts
from rest_framework import viewsets
from .serializers import PostsSerializer


class PostsViewSet(viewsets.ModelViewSet):
    serializer_class = PostsSerializer

    def get_queryset(self):
        return Posts.objects.all()


