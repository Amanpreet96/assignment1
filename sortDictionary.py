from operator import itemgetter

obj = [
    {"id": 4, "name": "abc"},
    {"id": 10, "name": "ab2"},
    {"id": 5, "name": "abc3"},
    {"id": 6, "name": "abc5"},
]

for item in sorted(obj, key=itemgetter("id")):
    print(item)
