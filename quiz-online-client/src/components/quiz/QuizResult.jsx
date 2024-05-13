import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { saveResultToDatabase } from "../../../utils/ResultService";
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { saveCertificateToDatabase } from "../../../utils/CertificateService"; // Importez votre service pour enregistrer les certificats
import certificateImage from '../../img/certificat.png';
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const QuizResult = () => {
    const location = useLocation();
    const { quizQuestions, totalScores, selectedSubject } = location.state;
    const numQuestions = quizQuestions.length;
    const percentage = Math.round((totalScores / numQuestions) * 100);
    const username = localStorage.getItem("username");

    useEffect(() => {
        if (username) {
            // Enregistrer le résultat seulement si le nom d'utilisateur est présent
            const resultData = {
                username: username,
                score: percentage,
                subject: selectedSubject,
                totalQuestions: numQuestions
            };

            saveResultToDatabase(resultData);

            // Enregistrer le certificat en PDF
            const certificateData = {
                username: username,
                pdfPath: 'path/to/certificate.pdf' // Chemin vers votre fichier PDF
            };
            saveCertificateToDatabase(certificateData);
        }
    }, [username, percentage, selectedSubject, numQuestions]);

    const handleRetakeQuiz = () => {
        alert("Oops! this functionality was not implemented!!!");
    };
	const handleDownloadCertificate = async () => {
		// Créer un nouveau document PDF
		const pdfDoc = await PDFDocument.create();
		const page = pdfDoc.addPage([600, 400]); // Taille de la page
	
		// Ajouter l'image comme arrière-plan
		const imgBytes = await fetch(certificateImage).then(res => res.arrayBuffer());
		const img = await pdfDoc.embedPng(imgBytes);
		const imgDims = img.scale(0.5);
		page.drawImage(img, {
			x: 0,
			y: 0,
			width: page.getWidth(),
			height: page.getHeight(),
		});
	
		// Ajouter les données de certificat au PDF
		const { width, height } = page.getSize();
		const fontSize = 20;
	
		// Calculer les coordonnées pour positionner le texte
		const textX = width / 2 - 90; // Décaler légèrement vers la gauche
        let textY = height / 2 + 5; // Positionner un peu plus bas

// Dessiner le texte avec une couleur bleu foncé
page.drawText(` ${username}`, {
    x: textX,
    y: textY,
    size: fontSize,
    color: rgb(0, 0, 0.5), // Bleu foncé
    font: await pdfDoc.embedFont(StandardFonts.Helvetica)
});

textY -= fontSize + 10; // Espacement entre le nom d'utilisateur et le score

page.drawText(`Score: ${percentage}%`, {
    x: textX,
    y: textY,
    size: fontSize,
    color: rgb(0, 0, 0.5), // Bleu foncé
    font: await pdfDoc.embedFont(StandardFonts.Helvetica)
});

textY -= fontSize + 10; // Espacement entre le score et le sujet

page.drawText(`Sujet: ${selectedSubject}`, {
    x: textX,
    y: textY,
    size: fontSize,
    color: rgb(0, 0, 0.5), // Bleu foncé
    font: await pdfDoc.embedFont(StandardFonts.Helvetica)
});

		
	
		// Générer un blob du document PDF
		const pdfBytes = await pdfDoc.save();
	
		// Convertir le blob en URL de données
		const pdfUrl = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
	
		// Créer un lien invisible pour le téléchargement
		const link = document.createElement('a');
		link.href = pdfUrl;
		link.download = 'certificate.pdf';
		document.body.appendChild(link);
	
		// Déclencher le téléchargement
		link.click();
	
		// Supprimer le lien après le téléchargement
		document.body.removeChild(link);
		URL.revokeObjectURL(pdfUrl);
	};
	
	


    return (
        <section >
            <h3>Your Quiz Result Summary</h3>
            <hr />
            <h5 className="text-info">
                You answered {totalScores} out of {numQuestions} questions correctly.
            </h5>
            <p>Your total score is {percentage}%.</p>
            <p>Subject: {selectedSubject}</p>

            <button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz}>
                Retake this quiz
            </button>

            <button className="btn btn-success btn-sm ml-3" onClick={handleDownloadCertificate}>
                Download Certificate
            </button>

			<div className="d-flex justify-content-end">
    <Link to={"/dash"} className="btn btn-secondary">
      <FaPlus /> Go back
    </Link>
  </div>
        </section>
    );
};

export default QuizResult;
