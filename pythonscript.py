import os

def print_structure(start_path, prefix=""):
    def walk_directory(path, prefix):
        if os.path.isdir(path):
            print(f"{prefix}├── {os.path.basename(path)}/")
            sub_prefix = prefix + "│   "
            items = sorted(os.listdir(path))
            for i, item in enumerate(items):
                item_path = os.path.join(path, item)
                if i == len(items) - 1:
                    walk_directory(item_path, prefix + "    ")
                else:
                    walk_directory(item_path, sub_prefix)
        else:
            print(f"{prefix}└── {os.path.basename(path)}")

    walk_directory(start_path, prefix)

if __name__ == "__main__":
    project_root = "src/"
    if os.path.exists(project_root):
        print_structure(project_root)
    else:
        print(f"The directory '{project_root}' does not exist.")
