"""homeaway URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.views.decorators.csrf import csrf_exempt
from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
import account.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', account.views.index),
    path('accounts/', include('django.contrib.auth.urls')),
    path('calculator/', account.views.calculator),
    path('form/', csrf_exempt(account.views.form)),
    path('graph/', account.views.graph),
    path('graph2/', account.views.graph2),
    # path('test/', account.views.test),
    # path('auth/', account.views.auth),
]
