from django.conf.urls import url
from posts import views

urlpatterns = [
    url(r'^api/v1/posts/$', views.posts_list),
]