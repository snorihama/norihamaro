from PIL import Image


def convert_to_translucent_white(input_path: str, output_path: str):
    # Open and ensure grayscale to normalize the brightness
    img = Image.open(input_path).convert("L")

    # We will build a new list of RGBA tuples
    data = img.getdata()
    new_data = []

    for pixel_value in data:
        # Calculate Alpha:
        # Original Black (0) -> Alpha 255 (Solid White)
        # Original White (255) -> Alpha 0 (Transparent)
        # Original Gray (128) -> Alpha 127 (Translucent White)
        alpha = 255 - pixel_value

        # Color is fixed to White (255, 255, 255)
        new_data.append((255, 255, 255, alpha))

    # Create the output image
    white_qr = Image.new("RGBA", img.size)
    white_qr.putdata(new_data)
    white_qr.save(output_path)
    print(f"White QR saved to {output_path}")


if __name__ == "__main__":
    # Source QR code lives outside public/; the generated white variant is
    # bundled from src/assets (imported, not served as a static public URL).
    target = "assets/qr/line-qr.png"
    convert_to_translucent_white(target, "../src/assets/branding/line-qr-white.png")
