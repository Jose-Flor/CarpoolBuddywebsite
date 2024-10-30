# views.py
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

def create_account(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()  # Save the user to the database
            return redirect('home')  # Redirect to the home page after successful account creation
    else:
        form = UserCreationForm()
    return render(request, 'create_account.html', {'form': form})
