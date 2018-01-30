from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render
import requests

# Create your views here.

def index(request):
    return render(request, 'index.html', context={})
def form(request):
    if request.method == 'POST':
        labor = request.POST.get("labor", "")
        amenities =request.POST.get("amenities", "")
        cleaning_supplies = request.POST.get("cleaning_supplies", "")
        laundry = request.POST.get("laundry", "")
        print(labor, amenities, cleaning_supplies, laundry)
    else:
        return render(request, 'form.html')
def graph(request):
    return render(request, 'graph.html')
def graph2(request):
    return render(request, 'graph2.html')
