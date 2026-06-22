function calculatePrediction(total, completed, pending, progress) {

    let completionRate = (completed / total) * 100;

    let prediction =
        (completionRate * 0.5) +
        (progress * 0.3) -
        (pending * 2);

    prediction = Math.max(0, Math.min(100, prediction));

    document.getElementById("predictionScore").innerText =
        Math.round(prediction) + "%";
}

calculatePrediction(9, 7, 2, 78);