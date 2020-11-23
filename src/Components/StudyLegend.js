import React from 'react';
import Container from 'react-bootstrap/Container';


export default function StudyLegend({ study: { ratios, ratiosEx, info, citation, comment, additionalReading } }) {
    return (
        <Container id="legend" fluid
            style={{
                backgroundColor: "lightgrey",
                margin: "10% 0 1% 0",
                textAlign: "left",
                padding: "1% 1% 1% 1%"
            }}
        >
           <p></p>
            <p> <strong>Data above was extracted from: </strong></p>
            <p>Gerevini, A. E., Maroldi, R., Olivato, M., Putelli, L., and Serina, I., “Prognosis Prediction in Covid-19 Patients from Lab Tests and X-ray Data through Randomized Decision Trees”, <i>arXiv e-prints</i>, 2020.</p>
            <p>Laure W. Prediction models for diagnosis and prognosis of covid-19: systematic review and critical appraisal. BMJ 2020; 369 doi: https://doi.org/10.1136/bmj.m1328 (Published 07 April 2020).</p>
            <p>Yang M., Samuel E, Adam F. W. July 30, 2020. Risk stratification of hospitalized COVID-19 patients through comparative studies of laboratory results with influenza. DOI:https://doi.org/10.1016/j.eclinm.2020.100475</p>
            <p>Ruan Q, Yang K, Wang W, Jiang L, Song J. Clinical predictors of mortality due to COVID‐19 based on an analysis of data of 150 patients from Wuhan, China. Intensive Care Med. 2020;46(5):846‐848.</p>
                        <p>Huang, J., Cheng, A., Kumar, R., Fang, Y., Chen, G., Zhu, Y., & Lin, S. (2020). Hypoalbuminemia predicts the outcome of COVID-19 independent of age and co-morbidity. Journal of medical virology, 10.1002/jmv.26003. Advance online publication. https://doi.org/10.1002/jmv.26003</p>
            <p>Zietz, M., Zucker, J., & Tatonetti, N. P. (2020). Testing the association between blood type and COVID-19 infection, intubation, and death. medRxiv : the preprint server for health sciences, 2020.04.08.20058073. https://doi.org/10.1101/2020.04.08.20058073</p>
            <p>Guan WJ. Clinical characteristics of coronavirus disease 2019 in China. New England Journal of Medicine. 2020 Feb 28</p>
            <p>Latz, C. A., DeCarlo, C., Boitano, L., Png, C., Patell, R., Conrad, M. F., Eagleton, M., & Dua, A. (2020). Blood type and outcomes in patients with COVID-19. Annals of hematology, 99(9), 2113–2118. https://doi.org/10.1007/s00277-020-04169-1</p>
            <p>Hu B, Hu C, et al. Clinical Characteristics of 138 Hospitalized Patients With 2019 Novel Coronavirus–Infected Pneumonia in Wuhan, China. JAMA. 2020;323(11):1061–1069. doi:10.1001/jama.2020.1585</p>
            </Container>
    )
}
