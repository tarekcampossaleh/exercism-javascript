//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
    return [...rna]
        .map((rnaSplitted) => rnaTranscript[rnaSplitted])
        .join("");
};

const rnaTranscript = { C: "G", G: "C", T: "A", A: "U" };
