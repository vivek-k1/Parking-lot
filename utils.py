# Random utility functions
import random
import string

def generate_random_string(length=10):
    return ''.join(random.choices(string.ascii_letters, k=length))

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def merge_lists(a, b):
    return sorted(a + b)
