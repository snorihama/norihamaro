from PIL import Image
import os


def compress_og():
    input_dir = "../public/og/"
    output_dir = "../public/og/"

    for filename in os.listdir(input_dir):
        if filename.endswith(".png"):
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(
                output_dir, f"{filename.split('.')[0]}_compressed.png"
            )

            with Image.open(input_path) as img:
                # expect the size of the image to be 1200x630, if not, resize it first
                if img.size != (1200, 630):
                    img = img.resize((1200, 630), Image.LANCZOS)

                    # Save the compressed image
                    img.save(output_path, optimize=True)
                    print(f"Compressed and saved: {output_path}")


if __name__ == "__main__":
    compress_og()
