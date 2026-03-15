from PIL import Image


def convert_to_translucent_black(input_path: str, output_path: str):
    # Open and ensure grayscale first to normalize R=G=B
    img = Image.open(input_path).convert("L")

    # Create a new RGBA image (initially all black)
    # We use the 'L' channel as the inverse for the Alpha channel
    width, height = img.size
    rgba_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))

    data = img.getdata()
    new_data = []

    for pixel_value in data:
        # The 'darkness' is the transparency.
        # If pixel is 255 (white), alpha is 0.
        # If pixel is 0 (black), alpha is 255.
        alpha = 255 - pixel_value

        # We keep the color as Black (0,0,0) and only vary the Alpha
        new_data.append((0, 0, 0, alpha))

    rgba_img.putdata(new_data)
    rgba_img.save(output_path)
    print(f"Processed: {output_path}")


if __name__ == "__main__":
    target = "../public/line-qr.png"
    convert_to_translucent_black(target, "../public/line-qr-translucent.png")
