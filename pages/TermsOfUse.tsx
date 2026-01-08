
import React, { useEffect } from 'react';

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // 상단 헤더 높이 고려
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { id: 'term-1', title: '제1조 목적' },
    { id: 'term-2', title: '제2조 용어정의' },
    { id: 'term-3', title: '제3조 약관명시' },
    { id: 'term-4', title: '제4조 서비스제공' },
    { id: 'term-5', title: '제5조 서비스중단' },
    { id: 'term-6', title: '제6조 회원가입' },
    { id: 'term-7', title: '제7조 이용자의무' },
    { id: 'term-8', title: '제8조 저작권귀속' },
    { id: 'term-9', title: '제9조 책임제한' },
    { id: 'term-10', title: '제10조 분쟁해결' },
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 animate-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-6">Terms & Conditions</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary leading-none">이용약관</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sticky Navigation Index */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-2 border-l border-slate-100 pl-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/20 mb-6">Document Index</p>
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="block text-left text-xs font-bold text-primary/40 hover:text-primary transition-colors py-1 hover:translate-x-1 transform duration-300"
                >
                  {sec.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Mobile Quick Index */}
          <div className="lg:hidden flex overflow-x-auto no-scrollbar gap-4 pb-4 mb-10 border-b border-slate-100">
             {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="whitespace-nowrap px-4 py-2 bg-bg-soft rounded-full text-[10px] font-bold text-primary/60"
                >
                  {sec.title}
                </button>
              ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9 space-y-24 text-primary/60 font-light leading-relaxed text-sm md:text-base animate-fade-up">
            <p className="text-primary font-medium text-lg leading-snug">
              Medical Korea Systems(이하 "회사")가 운영하는 웹사이트 및 제공하는 모든 AI 기반 헬스케어 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>

            <section id="term-1" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 1 조 (목적)</h2>
              <p>이 약관은 회사가 제공하는 인공지능 기반 건강 관리 시스템, 영양 관리 서비스, 그리고 의료 컨시어지 플랫폼(이하 "서비스")을 이용함에 있어 이용 조건 및 절차에 관한 기본적인 사항을 정합니다.</p>
            </section>

            <section id="term-2" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 2 조 (용어의 정의)</h2>
              <ul className="space-y-4">
                <li>• <strong>"서비스"</strong>란 회사가 구현하여 이용자가 이용할 수 있는 Q-health, NutriCheck, HELIOS™ 등의 제반 기능을 의미합니다.</li>
                <li>• <strong>"이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                <li>• <strong>"회원"</strong>이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
              </ul>
            </section>

            <section id="term-3" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 3 조 (약관의 명시와 개정)</h2>
              <p>회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 초기 서비스 화면에 게시합니다. 회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 개정 시 시행일 7일 전부터 공지합니다.</p>
            </section>

            <section id="term-4" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 4 조 (서비스의 제공 및 변경)</h2>
              <p>회사는 AI 진단 보조, 맞춤형 영양제 추천, 상담 데이터 분석 등의 서비스를 제공합니다. 서비스의 내용이나 기술적 사양이 변경될 경우 그 사유를 이용자에게 통지하고 변경하여 제공할 수 있습니다.</p>
            </section>

            <section id="term-5" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 5 조 (서비스의 중단)</h2>
              <p>회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
            </section>

            <section id="term-6" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 6 조 (회원가입)</h2>
              <p>이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. 회사는 등록 절차를 거쳐 이용자를 회원으로 승인합니다.</p>
            </section>

            <section id="term-7" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 7 조 (이용자의 의무)</h2>
              <p className="mb-4">이용자는 다음 행위를 하여서는 안 됩니다.</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>신청 또는 변경 시 허위 내용의 등록</li>
                <li>타인의 정보 도용</li>
                <li>회사가 게시한 정보의 변경 또는 시스템 해킹</li>
                <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
              </ul>
            </section>

            <section id="term-8" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 8 조 (저작권의 귀속 및 이용제한)</h2>
              <p>회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다. 이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포할 수 없습니다.</p>
            </section>

            <section id="term-9" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 9 조 (책임의 제한)</h2>
              <div className="bg-accent/5 p-8 rounded-[32px] border border-accent/10">
                <p className="text-accent font-bold mb-4 italic">Medical Disclaimer</p>
                <p className="text-sm leading-relaxed">회사가 제공하는 AI 분석 결과 및 건강 상담 정보는 정보 제공을 목적으로 하며, <strong>결코 전문의의 진료나 의학적 진단을 대신할 수 없습니다.</strong> 이용자는 서비스의 결과를 참고용으로만 활용해야 하며, 실제 질병의 진단 및 치료는 반드시 의료기관을 방문하여 전문가와 상의해야 합니다. 회사는 이용자가 서비스 정보를 오용하여 발생하는 문제에 대해 책임을 지지 않습니다.</p>
              </div>
            </section>

            <section id="term-10" className="scroll-mt-32 pb-40">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 10 조 (재판권 및 준거법)</h2>
              <p>회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 회사의 본사 소재지를 관할하는 법원을 전합 관할 법원으로 합니다. 본 약관의 해석 및 분쟁에 대해서는 대한민국 법을 적용합니다.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
