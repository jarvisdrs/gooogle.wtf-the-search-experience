import { useState } from "react";
import { 
  Menu, 
  Search, 
  Settings, 
  HelpCircle, 
  Grid3X3,
  User,
  Inbox,
  Star,
  Clock,
  Send,
  FileText,
  Trash2,
  ChevronDown,
  Plus,
  RefreshCw,
  MoreVertical,
  ArrowLeft,
  Reply,
  Forward,
  Archive,
  X,
  Pencil
} from "lucide-react";
import { allInboxEmails, allSentEmails, allDraftEmails, trashEmails } from "../data/emailData";
import Footer from "../components/Footer";

interface Email {
  id: string;
  from: string;
  to?: string;
  subject: string;
  preview: string;
  body?: string;
  time: string;
  read: boolean;
  starred: boolean;
}

type FolderType = 'inbox' | 'sent' | 'drafts' | 'trash' | 'starred';

const folderData: Record<FolderType, Email[]> = {
  inbox: allInboxEmails,
  sent: allSentEmails,
  drafts: allDraftEmails,
  trash: trashEmails,
  starred: [...allInboxEmails, ...allSentEmails, ...allDraftEmails].filter(e => e.starred)
};

const folderLabels: Record<FolderType, string> = {
  inbox: "Inbox",
  sent: "Sent",
  drafts: "Drafts",
  trash: "Trash",
  starred: "Starred"
};

// Gooogle Logo Component
const GooogleLogo = () => (
  <a href="/" className="flex items-center gap-1 text-lg sm:text-2xl font-normal tracking-tight hover:opacity-80 transition-opacity">
    <span className="text-[#4285f4]">G</span>
    <span className="text-[#ea4335]">o</span>
    <span className="text-[#fbbc05]">o</span>
    <span className="text-[#4285f4]">g</span>
    <span className="text-[#34a853]">l</span>
    <span className="text-[#ea4335]">e</span>
  </a>
);

const Mail = () => {
  const [currentFolder, setCurrentFolder] = useState<FolderType>('inbox');
  const [emails, setEmails] = useState<Email[]>(allInboxEmails);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleFolderChange = (folder: FolderType) => {
    setCurrentFolder(folder);
    setEmails(folderData[folder]);
    setSelectedEmail(null);
    setSearchQuery("");
    setSidebarOpen(false);
  };

  const toggleStar = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEmails(emails.map(email =>
      email.id === id ? { ...email, starred: !email.starred } : email
    ));
  };

  const markAsRead = (id: string) => {
    setEmails(emails.map(email =>
      email.id === id ? { ...email, read: true } : email
    ));
  };

  const filteredEmails = emails.filter(email =>
    email.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    email.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const unreadCount = allInboxEmails.filter(e => !e.read).length;
  const starredCount = [...allInboxEmails, ...allSentEmails].filter(e => e.starred).length;

  const folderItems = [
    { icon: Inbox, label: "Inbox", folder: 'inbox' as FolderType, count: unreadCount },
    { icon: Star, label: "Starred", folder: 'starred' as FolderType, count: starredCount },
    { icon: Clock, label: "Snoozed", folder: 'inbox' as FolderType, count: 0 },
    { icon: Send, label: "Sent", folder: 'sent' as FolderType, count: 0 },
    { icon: FileText, label: "Drafts", folder: 'drafts' as FolderType, count: allDraftEmails.length },
    { icon: Trash2, label: "Trash", folder: 'trash' as FolderType, count: 0 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-2 sm:px-4 py-2 border-b bg-white flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <GooogleLogo />
        </div>

        <div className="hidden sm:block flex-1 max-w-2xl mx-4">
          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2.5 rounded-full">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search mail"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ fontSize: '16px' }}
            />
            <button className="p-1 hover:bg-gray-200 rounded">
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full min-w-[44px] min-h-[44px] hidden sm:flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full min-w-[44px] min-h-[44px] hidden sm:flex items-center justify-center">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center">
            <Grid3X3 className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center text-xs sm:text-sm font-medium">
            JE
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Search Bar */}
        <div className="sm:hidden px-3 py-2 border-b">
          <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-full">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search mail"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm min-w-0"
              style={{ fontSize: '16px' }}
            />
          </div>
        </div>

        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 absolute sm:relative z-30 w-64 bg-white flex flex-col h-full shadow-lg sm:shadow-none transition-transform duration-200`}>
          <div className="sm:hidden flex items-center justify-between p-4 border-b">
            <span className="font-medium">{folderLabels[currentFolder]}</span>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4">
            <button
              onClick={() => setComposeOpen(true)}
              className="flex items-center justify-center sm:justify-start gap-3 bg-blue-100 hover:bg-blue-200 text-blue-900 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl shadow-sm transition-colors w-full sm:w-auto"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">Compose</span>
            </button>
          </div>

          <nav className="flex-1 px-2 overflow-y-auto">
            {folderItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleFolderChange(item.folder)}
                className={`w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-1.5 rounded-r-full text-sm transition-colors min-h-[44px] ${
                  currentFolder === item.folder
                    ? "bg-gray-200 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${currentFolder === item.folder ? "text-gray-700" : "text-gray-600"}`} />
                  <span>{item.label}</span>
                </div>
                {item.count > 0 && (
                  <span className="text-xs font-medium">{item.count}</span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="sm:hidden absolute inset-0 bg-black/20 z-20"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 bg-white border-l overflow-auto w-full">
          {selectedEmail ? (
            // Email Detail View
            <div className="h-full flex flex-col">
              {/* Detail Header */}
              <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3 border-b bg-white sticky top-0">
                <button 
                  onClick={() => setSelectedEmail(null)}
                  className="p-2 hover:bg-gray-100 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex items-center gap-1 sm:gap-2">
                  <button 
                    onClick={(e) => toggleStar(selectedEmail.id, e)}
                    className="p-2 hover:bg-gray-100 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        selectedEmail.starred ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                      }`}
                    />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded min-w-[44px] min-h-[44px] hidden sm:flex items-center justify-center">
                    <Reply className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded min-w-[44px] min-h-[44px] hidden sm:flex items-center justify-center">
                    <Forward className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded min-w-[44px] min-h-[44px] hidden sm:flex items-center justify-center">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Email Content */}
              <div className="flex-1 p-3 sm:p-6">
                <h1 className="text-lg sm:text-xl font-normal mb-4 break-words">{selectedEmail.subject}</h1>
                
                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm sm:text-base font-medium flex-shrink-0">
                    {currentFolder === 'sent' ? 'JE' : selectedEmail.from.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                      <span className="font-semibold text-sm truncate">
                        {currentFolder === 'sent' ? 'J. Epstein' : selectedEmail.from}
                      </span>
                      <span className="text-gray-500 text-xs sm:text-sm truncate">
                        &lt;{(currentFolder === 'sent' ? 'jeffrey.epstein' : selectedEmail.from.toLowerCase().replace(/\s/g, '.'))}@email.com&gt;
                      </span>
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm">
                      to {currentFolder === 'sent' ? selectedEmail.to : 'me'}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      {selectedEmail.time}
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none whitespace-pre-wrap text-sm leading-relaxed text-gray-800">
                  {selectedEmail.body}
                </div>
              </div>
            </div>
          ) : (
            // Email List View
            <>
              <div className="flex items-center justify-between px-2 sm:px-4 py-2 border-b">
                <div className="flex items-center gap-1 sm:gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <input type="checkbox" className="rounded" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded min-w-[44px] min-h-[44px] hidden sm:flex items-center justify-center">
                    <RefreshCw className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded min-w-[44px] min-h-[44px] hidden sm:flex items-center justify-center">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  {folderLabels[currentFolder]} ({filteredEmails.length})
                </div>
              </div>

              <div className="divide-y">
                {filteredEmails.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    <Inbox className="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-gray-300" />
                    <p className="text-base sm:text-lg font-medium">No messages</p>
                    <p className="text-xs sm:text-sm">This folder is empty</p>
                  </div>
                ) : (
                  filteredEmails.map((email) => (
                    <div
                      key={email.id}
                      onClick={() => {
                        setSelectedEmail(email);
                        markAsRead(email.id);
                      }}
                      className={`flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3 hover:shadow-md cursor-pointer transition-shadow ${
                        !email.read ? "bg-blue-50" : "bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-1 sm:gap-2">
                        <input type="checkbox" className="rounded" onClick={(e) => e.stopPropagation()} />
                        <button
                          onClick={(e) => toggleStar(email.id, e)}
                          className="p-1 hover:bg-gray-100 rounded min-w-[36px] min-h-[36px] flex items-center justify-center"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              email.starred ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                            }`}
                          />
                        </button>
                      </div>

                      <span className={`w-24 sm:w-48 truncate text-sm ${!email.read ? "font-semibold" : ""}`}>
                        {currentFolder === 'sent' ? `To: ${email.to}` : email.from}
                      </span>

                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 min-w-0">
                        <span className={`truncate text-sm ${!email.read ? "font-semibold" : ""}`}>
                          {email.subject}
                        </span>
                        <span className="text-gray-500 truncate text-xs sm:text-sm hidden sm:block">
                          - {email.preview}
                        </span>
                      </div>

                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {email.time}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </main>
      </div>

      {/* Compose Modal */}
      {composeOpen && (
        <div className="fixed bottom-0 right-0 sm:right-4 left-0 sm:left-auto w-full sm:w-[500px] bg-white rounded-t-lg sm:rounded-t-lg shadow-2xl border z-40">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-lg">
            <span className="text-sm font-medium">New Message</span>
            <button
              onClick={() => setComposeOpen(false)}
              className="text-gray-500 hover:text-gray-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              ×
            </button>
          </div>
          <div className="p-4 space-y-3">
            <input
              type="text"
              placeholder="To"
              className="w-full border-b pb-2 text-sm outline-none"
              style={{ fontSize: '16px' }}
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-b pb-2 text-sm outline-none"
              style={{ fontSize: '16px' }}
            />
            <textarea
              placeholder="Write your message..."
              className="w-full h-32 sm:h-48 resize-none text-sm outline-none"
              style={{ fontSize: '16px' }}
            />
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setComposeOpen(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700 min-h-[44px]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Mail;