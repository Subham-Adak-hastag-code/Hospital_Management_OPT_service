from django.shortcuts import render


# Create your views here.
def webpage1(request):
    return render(request,'page1.html')

def login(request):
    return render(request, 'login.html')