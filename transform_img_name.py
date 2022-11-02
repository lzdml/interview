import os
path = './docs/assets/wx'

file_list = os.listdir(path)
print(file_list)

for index, item in enumerate(file_list):
    if (item.endswith('.png')):
        name = str(index) + '.' + item.split('.')[1]
        src = os.path.join(os.path.abspath(path), item)
        dst = os.path.join(os.path.abspath(path), name)
        try:
            os.rename(src, dst)
            print('rename from %s to %s' % (src, dst))
        except:
            continue



