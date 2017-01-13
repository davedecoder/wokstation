#!/usr/bin/python

import os
import mmap
import re
from pathlib import Path

# traverse root directory, and list directories as dirs and files as files
for root, dirs, files in os.walk("."):
    path = root.split('/')
    #print((len(path) - 1) * '---', os.path.basename(root))
    for file in files:
        if file.endswith('.css'):
            #print(len(path) * '---', file)
            fullpath = os.path.join(root, file)
            if os.path.getsize(fullpath) > 0:
                with open(fullpath, 'r', encoding="utf8") as f:
                    s = f.read()
                    if re.search(r'(?i)carousel-control',s):
                        print(fullpath);
                        """data = re.sub(r'(?i)carousel',r'carousel', s)
                        with open(fullpath, 'w', encoding="utf8") as fo:
                            fo.write(data)"""