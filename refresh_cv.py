import argparse
import shutil
from pathlib import Path

from pdf2image import convert_from_path

DPI = 200
QUALITY = 85


def convert_pdf_to_jpg(pdf_path: Path, output_dir: Path) -> None:
    try:
        images = convert_from_path(str(pdf_path), dpi=DPI)
        image = images[0]

        output_file = output_dir / "cv.jpg"
        if output_file.exists():
            output_file.unlink()

        # Convert to RGB mode if necessary
        if image.mode != "RGB":
            image = image.convert("RGB")
        image.save(output_file, "JPEG", quality=QUALITY)
        print(f"Saved: {output_file}")
    except Exception as e:
        print(f"Error converting PDF: {str(e)}")


def refresh_cv(pdf_path: Path, output_dir: Path) -> None:
    try:
        output_file = output_dir / "OBaxandallResume.pdf"
        if output_file.exists():
            output_file.unlink()

        shutil.copy(pdf_path, output_file)
        print(f"Saved: {output_file}")
    except Exception as e:
        print(f"Error copying PDF: {str(e)}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert PDF files to JPG images")
    parser.add_argument("pdf_path", type=Path, help="Path to the PDF file")
    parser.add_argument(
        "--output-dir",
        "-o",
        type=Path,
        default=Path("output"),
        help="Output directory for JPG files (default: output)",
    )
    args = parser.parse_args()

    if not args.pdf_path.is_file():
        print(f"Error: PDF file not found: {args.pdf_path}")
        return
    if args.pdf_path.suffix.lower() != ".pdf":
        print(f"Error: File must be a PDF: {args.pdf_path}")
        return

    convert_pdf_to_jpg(args.pdf_path, args.output_dir)
    refresh_cv(args.pdf_path, args.output_dir)


if __name__ == "__main__":
    main()
