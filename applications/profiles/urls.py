from django.urls import path, include
from rest_framework import routers
from .api import PostsViewSet
from .views import *
from knox import views as knox_views

# router = routers.DefaultRouter()
# router.register('api/posts', PostsViewSet, 'posts')
#
# urlpatterns = router.urls

urlpatterns = [
    path('', PostListView.as_view()),
    path('create/', create_post, name='create'),
    path('delete/<pk>/', PostDeleteView.as_view()),
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
