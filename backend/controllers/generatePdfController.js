import PDFDocument from 'pdfkit';

export const generatePdfController = (req, res) => {
    const nomorAntrian = req.query.nomorAntrian;
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment;filename=ticket.pdf");
    doc.pipe(res);
    doc.fontSize(30).text(`No. Antrian`, {align: "center"});
    doc.moveDown()
    doc.fontSize(50).text(`${nomorAntrian}`, {align: "center"});
    doc.end();
}