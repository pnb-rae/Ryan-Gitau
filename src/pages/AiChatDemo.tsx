import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send, Bot, User } from "lucide-react"
import { Link } from "react-router-dom"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export default function AiChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. I can help you with various tasks, answer questions, and provide insights. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      timestamp: new Date()
    }

    const botResponses = [
      "That's an interesting question! Let me think about that...",
      "I understand what you're asking. Here's my perspective on that topic.",
      "Great question! Based on my knowledge, I can tell you that...",
      "I'm here to help! Let me provide you with some insights on that.",
      "Thank you for asking! I'd be happy to assist you with that information."
    ]

    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponses[Math.floor(Math.random() * botResponses.length)],
      isBot: true,
      timestamp: new Date()
    }

    setMessages([...messages, userMessage, botMessage])
    setInput("")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">AI Chat Assistant Demo</h1>
            <p className="text-muted-foreground">Interactive demo of AI-powered conversation</p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient rounded-2xl p-6 h-96 flex flex-col">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isBot ? 'bg-primary' : 'bg-accent'
                  }`}>
                    {message.isBot ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.isBot 
                      ? 'bg-muted text-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1"
              />
              <Button onClick={sendMessage} size="sm" className="px-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Demo Info */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Features Demonstrated</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Natural Language Processing</h4>
                <p className="text-sm text-muted-foreground">Understanding and responding to user queries</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Real-time Responses</h4>
                <p className="text-sm text-muted-foreground">Instant AI-powered conversation flow</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Context Awareness</h4>
                <p className="text-sm text-muted-foreground">Maintaining conversation context and history</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}