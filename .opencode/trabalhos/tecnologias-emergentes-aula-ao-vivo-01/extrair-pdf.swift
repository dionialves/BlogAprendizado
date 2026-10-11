import Foundation
import PDFKit
import AppKit

let source = CommandLine.arguments[1]
let destination = CommandLine.arguments[2]
guard let document = PDFDocument(url: URL(fileURLWithPath: source)) else {
    fatalError("PDF ilegível")
}
var text = "Páginas físicas: \(document.pageCount)\n"
for index in 0..<document.pageCount {
    guard let page = document.page(at: index) else { continue }
    text += "\n=== Página física \(index + 1) ===\n" + (page.string ?? "[Sem texto extraível]") + "\n"
    if [3, 4, 5, 6, 9, 12, 16, 18].contains(index) {
        let image = page.thumbnail(of: NSSize(width: 1800, height: 1200), for: .mediaBox)
        if let tiff = image.tiffRepresentation,
           let bitmap = NSBitmapImageRep(data: tiff),
           let png = bitmap.representation(using: .png, properties: [:]) {
            try png.write(to: URL(fileURLWithPath: destination + "/pagina-\(index + 1).png"))
        }
    }
}
try text.write(toFile: destination + "/slides-extraidos.txt", atomically: true, encoding: .utf8)
print("Extraídas \(document.pageCount) páginas com PDFKit; imagens intermediárias no dossiê.")
