import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Theme colors for temple tourism style
const THEME = {
  bg: "#fffaf3", // light cream background
  panel: "#8b0000", // deep maroon
  border: "#ffd700", // gold borders
  text: "#fffaf3", // cream text for dark areas
  accent: "#ff9933", // saffron accent
  userBubble: "#ff9933", // saffron background for user messages
  botBubble: "#f5deb3", // parchment background for bot messages
  botText: "#5c2e00", // dark brown text for bot messages
};

const uid = () => Math.random().toString(36).slice(2, 10);

const LS_KEY_CURRENT = "tourbot-current";
const LS_KEY_ALL = "tourbot-convos";

function useLocalStorage(key, initial) {
  const [val, setVal] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  }, [key, val]);
  return [val, setVal];
}

function useConversations() {
  const [all, setAll] = useLocalStorage(LS_KEY_ALL, []);
  const [currentId, setCurrentId] = useLocalStorage(LS_KEY_CURRENT, null);

  useEffect(() => {
    if (!currentId) {
      const first = { id: uid(), title: "New chat", messages: [] };
      setAll((prev) => [first, ...prev]);
      setCurrentId(first.id);
    }
  }, []);

  const current = useMemo(() => all.find((c) => c.id === currentId) || null, [all, currentId]);
  const updateCurrent = (fn) => {
    setAll((prev) => prev.map((c) => (c.id === currentId ? fn({ ...c }) : c)));
  };

  const newChat = () => {
    const c = { id: uid(), title: "New chat", messages: [] };
    setAll((prev) => [c, ...prev]);
    setCurrentId(c.id);
  };

  const deleteChat = (id) => {
    setAll((prev) => prev.filter((c) => c.id !== id));
    if (id === currentId) {
      setTimeout(() => {
        if (all.length > 1) setCurrentId(all.find((c) => c.id !== id)?.id || null);
        else {
          const c = { id: uid(), title: "New chat", messages: [] };
          setAll([c]);
          setCurrentId(c.id);
        }
      }, 0);
    }
  };

  const renameChat = (id, title) => {
    setAll((prev) => prev.map((c) => (c.id === id ? { ...c, title } : c)));
  };

  const setCurrent = (id) => setCurrentId(id);

  return { all, current, currentId, newChat, deleteChat, renameChat, setCurrent, updateCurrent };
}

const IconX = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...props}>
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconZoomArrow = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...props}>
    <path d="M8 8H4m0 0v4m0-4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const FloatingButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-[60] px-5 py-4 rounded-full shadow-lg"
    style={{ background: `linear-gradient(45deg, ${THEME.panel}, ${THEME.accent})`, color: THEME.text, border: `2px solid ${THEME.border}` }}
  >
    <div className="text-xs sm:text-sm font-semibold">ASK OUR AI<br/>CHATBOT</div>
  </button>
);

export default function TourismChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const { all, current, currentId, newChat, setCurrent, updateCurrent, renameChat, deleteChat } = useConversations();
  const endRef = useRef(null);

  useEffect(() => {
    if (!endRef.current) return;
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [current?.messages?.length, open, fullscreen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || sending || !current) return;
    setSending(true);

    const userMsg = { id: uid(), role: "user", content: text, ts: Date.now() };
    updateCurrent((c) => ({ ...c, title: c.title === "New chat" ? text.slice(0, 24) : c.title, messages: [...c.messages, userMsg] }));
    setInput("");

    await new Promise((r) => setTimeout(r, 500));
    const botMsg = { id: uid(), role: "assistant", content: `You said: "${text}". This is a placeholder bot reply.`, ts: Date.now() };
    updateCurrent((c) => ({ ...c, messages: [...c.messages, botMsg] }));
    setSending(false);
  };

  const ChatBubble = ({ role, children }) => {
    const isUser = role === "user";
    return (
      <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"}`}>
        <div
          className={`max-w-[85%] px-4 py-2 rounded-xl border shadow`}
          style={{
            background: isUser ? THEME.userBubble : THEME.botBubble,
            color: isUser ? THEME.text : THEME.botText,
            borderColor: THEME.border,
          }}
        >
          {children}
        </div>
      </div>
    );
  };

  const headerBar = (
    <div className="flex items-center justify-between px-3 py-2 border-b" style={{ background: `linear-gradient(45deg, ${THEME.panel}, ${THEME.accent})`, color: THEME.text, borderColor: THEME.border }}>
      <div className="flex items-center gap-2">
        <button onClick={() => setFullscreen((v) => !v)} className="p-1 rounded-lg border" style={{ borderColor: THEME.border }}>
          <IconZoomArrow style={{ color: THEME.border }} />
        </button>
        <div className="text-sm font-semibold">Temple Chatbot</div>
      </div>
      <button onClick={() => (fullscreen ? setFullscreen(false) : setOpen(false))} className="p-1 rounded-lg border" style={{ borderColor: THEME.border }}>
        <IconX style={{ color: THEME.border }} />
      </button>
    </div>
  );

  const InputBar = (
    <div className="w-full p-3 border-t" style={{ borderColor: THEME.border }}>
      <div className="flex items-end gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={1}
          placeholder="Ask about temples, tours, or travel..."
          className="flex-1 resize-none bg-transparent outline-none rounded-xl px-3 py-2 border text-sm"
          style={{ color: THEME.botText, borderColor: THEME.border }}
        />
        <button
          onClick={sendMessage}
          disabled={sending || !input.trim()}
          className="px-4 py-2 rounded-xl border text-sm font-medium disabled:opacity-60"
          style={{ background: `linear-gradient(45deg, ${THEME.panel}, ${THEME.accent})`, color: THEME.text, borderColor: THEME.border }}
        >
          Send
        </button>
      </div>
    </div>
  );

  const CompactChat = (
    <div className="fixed z-[70] rounded-[20px] border shadow-lg overflow-hidden" style={{ right: "1.25rem", bottom: "1.25rem", width: "min(92vw, 420px)", height: "min(80vh, 580px)", background: THEME.bg, borderColor: THEME.border, backgroundImage: "url('/temple-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="h-full flex flex-col">
        {headerBar}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          {current?.messages?.map((m) => (
            <div className="mb-3" key={m.id}>
              <ChatBubble role={m.role}>{m.content}</ChatBubble>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        {InputBar}
      </div>
    </div>
  );

  const FullscreenChat = (
    <div className="fixed inset-0 z-[80] p-4" style={{ background: THEME.bg, backgroundImage: "url('/temple-full-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="h-full w-full rounded-[20px] border overflow-hidden flex flex-col" style={{ borderColor: THEME.border }}>
        {headerBar}
        <div className="flex-1 grid grid-cols-12 gap-3 px-2 pb-2">
          <aside className="col-span-12 md:col-span-4 rounded-2xl border overflow-hidden flex flex-col" style={{ borderColor: THEME.border, background: "#fff7e6" }}>
            <div className="px-3 py-2 border-b text-sm font-semibold" style={{ borderColor: THEME.border, color: THEME.botText }}>Chats</div>
            <div className="flex-1 overflow-y-auto">
              {all.map((c) => (
                <button key={c.id} onClick={() => setCurrent(c.id)} className={`w-full text-left px-3 py-2 border-b ${c.id === currentId ? "bg-yellow-100" : "hover:bg-yellow-50"}`} style={{ borderColor: THEME.border, color: THEME.botText }}>
                  {c.title || "Untitled"}
                </button>
              ))}
            </div>
            <div className="p-2 border-t flex gap-2" style={{ borderColor: THEME.border }}>
              <button onClick={newChat} className="px-3 py-1 rounded-lg border text-xs" style={{ borderColor: THEME.border, color: THEME.botText }}>New</button>
              {current && (
                <button onClick={() => deleteChat(current.id)} className="px-3 py-1 rounded-lg border text-xs" style={{ borderColor: THEME.border, color: THEME.botText }}>Delete</button>
              )}
            </div>
          </aside>
          <section className="col-span-12 md:col-span-8 rounded-2xl border flex flex-col overflow-hidden" style={{ borderColor: THEME.border, background: THEME.bg }}>
            <div className="flex-1 overflow-y-auto px-3 py-4">
              {current?.messages?.map((m) => (
                <div className="mb-3" key={m.id}>
                  <ChatBubble role={m.role}>{m.content}</ChatBubble>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            {InputBar}
          </section>
        </div>
      </div>
    </div>
  );

  return createPortal(
    <div>
      {!open && !fullscreen && <FloatingButton onClick={() => setOpen(true)} />}
      {open && !fullscreen && CompactChat}
      {fullscreen && FullscreenChat}
    </div>,
    document.body
  );
}
