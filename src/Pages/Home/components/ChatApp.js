import React from 'react'

function ChatApp() {
  return (
    <div style={{'textAlign': 'center'}}>
        <p style={{'fontWeight':'800', 'fontSize':'42px'}}>AI ChatBot</p>
        <p style={{'padding': '8%', 'fontWeight':'500'}}>Have you ever wondered if you could condense down a Terms and Condition document by asking it questions?
            What about analyzing company earnings calls, quarterly reports or long text documents filed with the SEC? 
            Or simply, spawning a cover letter based on a resume? With the QnAChatBot, you could do all of that and much more. Try out the demo below.
        </p>
        
        <iframe src="https://qnachatbotgit-wt3gsf18sv.streamlit.app/?embedded=True" width="100%" height="800" title='streamlit-chatbot'></iframe>
    </div>
  )
}

export default ChatApp