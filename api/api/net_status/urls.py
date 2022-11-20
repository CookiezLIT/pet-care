from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from net_status.views import GetStatus

urlpatterns = [
    path('',GetStatus.as_view()),
]