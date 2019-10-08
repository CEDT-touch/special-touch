from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.index, name='index'),
    path('newFrameTest/', views.new_frame_test, name='newFrame'),
    path('', views.login, name='login'),
    path('clear/', views.clear_session, name='clearSession'),
]