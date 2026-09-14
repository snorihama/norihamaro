from PIL import Image
import os


def png_to_ico():
    # Source images (one raw PNG per favicon brand) live outside public/,
    # since they aren't served themselves - only the generated .ico sizes are.
    input_dir = "assets/icons/"
    output_dir = "../public/favicons/"
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]

    for img in os.listdir(input_dir):
        if img.endswith(".png"):
            img_path = os.path.join(input_dir, img)
            brand = os.path.splitext(img)[0]
            brand_dir = os.path.join(output_dir, brand)
            os.makedirs(brand_dir, exist_ok=True)
            for size in sizes:
                with Image.open(img_path) as im:
                    im_resized = im.resize(size, Image.LANCZOS)
                    output_path = os.path.join(
                        brand_dir, f"{size[0]}x{size[1]}.ico"
                    )
                    im_resized.save(output_path, format="ICO")


if __name__ == "__main__":
    png_to_ico()
