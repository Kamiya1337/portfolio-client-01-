import { portfolioData } from '../data/portfolioData';
import { BookOpenText, Library, Layers, Quote } from 'lucide-react';

export default function HomeTab({ setActiveTab }) {
  const { student, overview } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in pb-10">
      
      {/* Hero Section */}

      <div className="relative rounded-3xl bg-gradient-to-br from-academic-navy via-slate-800 to-academic-hero-blue text-white p-8 md:p-12 shadow-2xl overflow-hidden border border-slate-700">
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-[0.08] pointer-events-none">
          <div className="absolute right-10 top-10 h-64 w-48 rounded-t-full border border-academic-cyan" />
          <div className="absolute right-24 top-24 h-64 w-48 rounded-t-full border border-academic-blue-light" />
          <Quote className="absolute right-14 bottom-8 text-academic-cyan" size={120} strokeWidth={1} />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6 tracking-wide">
            Báo cáo Cuối kỳ
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Korean Language & Culture <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-academic-blue-light to-academic-cyan">Learning Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-6 font-light">
            Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mb-8 max-w-2xl">
            <p className="text-slate-200 leading-relaxed mb-5">{student.bio}</p>
            <div className="flex flex-wrap gap-2">
              {student.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-800/80 text-blue-300 text-xs font-medium rounded-md border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab('projects')}
              className="px-6 py-3 bg-academic-blue hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg shadow-blue-950/30 transition-all flex items-center gap-2"
            >
              <Layers size={18} /> Xem bài tập
            </button>
            <button 
              onClick={() => setActiveTab('evidence')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm transition-all flex items-center gap-2 border border-white/30"
            >
              <Library size={18} /> Minh chứng
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Bài học', value: '07', desc: 'Chủ đề lý thuyết' },
          { label: 'Sản phẩm', value: '06', desc: 'Bài tập thực hành' },
          { label: 'Kỹ năng số', value: '06+', desc: 'Nhóm năng lực lõi' },
          { label: 'Mức điểm kỳ vọng', value: '10', desc: 'Xuất sắc' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-academic-border flex flex-col items-center text-center">
            <h3 className="text-4xl font-black text-academic-hero-blue mb-1">{stat.value}</h3>
            <p className="font-bold text-academic-ink text-sm">{stat.label}</p>
            <p className="text-xs text-academic-muted mt-1">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Course Overview Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <BookOpenText className="text-academic-blue" size={28} />
          <h2 className="text-2xl md:text-3xl font-bold text-academic-ink">Tổng quan Năng lực Học phần</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {overview.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-academic-border shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-academic-blue rounded-lg group-hover:bg-academic-blue group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-academic-ink mb-1 leading-tight">{item.title}</h3>
                  <p className="text-sm text-academic-muted leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
