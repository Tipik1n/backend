from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    path('token/',TokenObtainPairView.as_view(), name='token_obtaair'),
    path('token/refresh',TokenRefreshView.as_view(), name='token_in_pairRefreshView')
]