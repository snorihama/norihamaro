from PIL import Image
import os


def png_to_ico():
    input_dir = "../public/icons/"
    output_dir = "../public/icons/"
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]

    for img in os.listdir(input_dir):
        if img.endswith(".png"):
            img_path = os.path.join(input_dir, img)
            for size in sizes:
                with Image.open(img_path) as im:
                    im_resized = im.resize(size, Image.LANCZOS)
                    img_name = os.path.splitext(img)[0]
                    output_path = os.path.join(
                        output_dir, f"{img_name}_{size[0]}x{size[1]}.ico"
                    )
                    im_resized.save(output_path, format="ICO")


if __name__ == "__main__":
    png_to_ico()
