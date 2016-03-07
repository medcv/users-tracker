from django.conf.urls import url
from labs import views

urlpatterns = [
    url(r'^api/v1/labs/$', views.labs_list),
    url(r'^api/v1/labs/(?P<lab_name>[a-z A-Z]+)/$', views.labs_detail),
]