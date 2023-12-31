from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path("", views.getRoutes),
    path("persons/", views.getPersons),
    path("token/", MyTokenObtainPairView.as_view(), name="token_obtainer"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_in_pair"),
]
