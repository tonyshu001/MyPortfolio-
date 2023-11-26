const projects = [
    {
        id: "fact-checking-system",
        title: "Fact-checking system",
        description:
            "This project developed an innovative automated system for fact-checking claims related to climate change."
            + "Utilizing a blend of advanced NLP techniques, the system efficiently processes vast amount of data"
            + " to verify the truthfulness of various statements.",
        getImageSrc: () => require("../data/images/fact_checking.png"),
        linkTo: "/projects/fact-checking-system",
        hasReport: true,
        hasCode: false,
        specification: `
        <h2>Introduction</h2>
        <p>Climate change is a major global concern, and the rapid spread of misinformation, especially through social media, complicates public understanding of this issue. This highlights the need for automated fact-checking systems that rely on Natural Language Processing (NLP) models. However, creating an accurate system involves challenges in information retrieval and claim validation. This report details a structured pipeline developed to address these challenges effectively.</p>
    
        <h2>Problem Statement</h2>
        <p>The challenge is to design a system capable of:</p>
        <ul>
          <li>Retrieving relevant evidence to a given claim from an extensive knowledge source (approx. 1.2 million).</li>
          <li>Classifying the validity of the claims into four categories: SUPPORTS, REFUTES, NOT_ENOUGH_INFO, and DISPUTED.</li>
        </ul>
    
        <h2>Main Challenge</h2>
        <p>The main challenge in building this fact-checking system is twofold: effectively retrieving relevant information from a vast database and accurately determining the reliability of a given claim. Achieving a balance between these two aspects, especially in the complex domain of climate science, is crucial for the system's success.</p>
    
        <h2>Research Background</h2>
        <p>Previous research in this field has seen the development of advanced fact-checking systems using various models and functions. However, some methods, like the BM25 ranking function, show limitations in understanding complex language contexts. This calls for more efficient models capable of handling extensive evidence collections without compromising accuracy.</p>
    
        <h2>Methodology</h2>
        <h3>Pipeline Design</h3>
        <p>To tackle this problem, a pipeline is designed to process claims about climate change by searching for relevant evidence in an extensive knowledge base and classifying the claim's status into categories like SUPPORTS, REFUTES, NOT_ENOUGH_INFO, and DISPUTED. The pipeline operates in three stages: initial evidence filtering, precise evidence filtering, and claim verification.</p>
        
        <h3>Stage One</h3>
        <p>Starts with a claim and a collection of evidence, aiming to filter out the most relevant pieces.</p>
        <ul>
          <li><strong>Technique Used:</strong> BM25+ Function</li>
          <li><strong>Purpose:</strong> To filter out the top 100 pieces of evidence from a larger collection, based on their similarity scores with the given claim.</li>
          <li><strong>Enhancement Strategy:</strong> Incorporation of Sentence Transformers with DistilBERT pre-trained weights for better context understanding and efficient processing. The model is fine-tuned with cosine similarity as the measure and cosine embedding loss for optimization, enhancing the precision of the retrieved evidence set.</li>
        </ul>
    
        <h3>Stage Two</h3>
        <p>Focuses on identifying the truly relevant evidence from the previously filtered set.</p>
        <ul>
          <li><strong>Techniques Used:</strong> T5 and RoBERTa Models</li>
          <li><strong>Purpose:</strong> To refine the evidence set by identifying truly relevant evidence pieces from the previously filtered collection.</li>
          <li><strong>Implementation:</strong> T5 is used for its sequence-to-sequence transformation capabilities, with input sequences combining claim and evidence and outputting relevancy judgment. RoBERTa, modified for better performance, is used for its straightforward preprocessing and binary output on relevancy, enhancing the precision of evidence selection.</li>
        </ul>
    
        <h3>Stage Three</h3>
        <p>Uses the refined evidence to categorize the initial claim into one of the predefined classes.</p>
        <ul>
          <li><strong>Techniques Used:</strong> T5 and RoBERTa Models</li>
          <li><strong>Purpose:</strong> To categorize the claim into one of the predefined classes (SUPPORTS, REFUTES, NOT_ENOUGH_INFO, DISPUTED) using the refined evidence.</li>
          <li><strong>Implementation:</strong> T5's sequence-to-sequence model formulates input sequences that include the claim and the refined evidence, outputting the classification label. RoBERTa uses a more straightforward input sequence, providing a range of outputs corresponding to the predefined categories.</li>
        </ul>
    
        <h3>Optimization and Tuning</h3>
        <p>Each model in the pipeline is fine-tuned with specific hyperparameters to optimize performance, focusing on improving accuracy and reducing overfitting. This includes adjustments in learning rates, batch sizes, and the number of training epochs, ensuring the models are well-calibrated for the tasks at hand.</p>

        <h2>Evaluation and Results</h2>
        <p>For evidence retrieval, the F1 score is used for evaluation as both precision and recall are vital. For claim verification, the accuracy score is utilized for evaluation as it is intuitive and interpretable.</P>
        <br>
        <p>The performance of the system is assessed at each stage, and <strong>achieved a remarkable 7th rank among over 400 participants, a testament to the top 2% placement </strong>. This performance underscores the robustness and efficiency of the pipeline design, which is tailored to enhance accuracy and reliability in fact-checking.</p>
    
        <h2>Conclusion and Future Work</h2>
        <p>The report concludes with the pipeline achieving commendable results in automated fact-checking for climate change claims. However, it notes potential over-tuning in the final evaluation. Future work will focus on exploring techniques to prevent overfitting and further refine the system's accuracy.</p>
      `,
      
    },
    {
        id:"e-ticket",
        title: "E-ticket",
        description:
            "This ASP.NET based web application revolutionizes the movie ticket purchasing experience by offering a user-friendly online platform.",
        getImageSrc: () => require("../data/images/e_ticket.png"),
        linkTo: "/projects/e-ticket",
    },
    {
        id:"password-manager",
        title: "Password manager with security and usability",
        description:
            "A password manager meticulously designed to balance stringent security with intuitive usability, ensuring safe and effortless password management.",
        getImageSrc: () => require("../data/images/password_manager.png"),
        linkTo: "/projects/password-manager",
    },
    {
        id: "reversi",
        title: "AI agent for Reversi",
        description:
            "A Reversi AI agent project, ingeniously employing Monte Carlo Tree Search and Minimax.",
        getImageSrc: () => require("../data/images/reversi.png"),
        linkTo: "/projects/reversi",
    },
  ];

  export default projects;