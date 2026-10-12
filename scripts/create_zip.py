import os
import zipfile

def make_zip():
    base_dir = os.getcwd()
    public_dir = os.path.join(base_dir, "public")
    os.makedirs(public_dir, exist_ok=True)
    
    zip_path_public = os.path.join(public_dir, "kafeavtomoyka-website.zip")
    zip_path_root = os.path.join(base_dir, "kafeavtomoyka-website.zip")
    
    # Exclude list
    exclude_dirs = {"node_modules", ".git", ".cache", ".npm", "tmp"}
    exclude_files = {"kafeavtomoyka-website.zip"}
    
    print(f"Creating zip file at {zip_path_public}...")
    
    with zipfile.ZipFile(zip_path_public, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(base_dir):
            # filter out excluded dirs
            dirs[:] = [d for d in dirs if d not in exclude_dirs and not d.startswith(".")]
            
            for file in files:
                if file in exclude_files or file.endswith(".zip"):
                    continue
                # only include project files
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, base_dir)
                
                # Filter to only relevant app directories & files
                valid_prefixes = ("src", "dist", "public", "index.html", "package.json", "package-lock.json", "tsconfig.json", "vite.config.ts", "metadata.json", "README.md", ".env.example", ".gitignore")
                if not any(rel_path == vp or rel_path.startswith(vp + os.sep) for vp in valid_prefixes):
                    continue
                
                zipf.write(file_path, os.path.join("kafeavtomoyka", rel_path))
                
    # Also copy to root for convenience
    import shutil
    shutil.copyfile(zip_path_public, zip_path_root)
    
    size_mb = os.path.getsize(zip_path_public) / (1024 * 1024)
    print(f"Successfully created ZIP archive: {size_mb:.2f} MB")

if __name__ == "__main__":
    make_zip()
