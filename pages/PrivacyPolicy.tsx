
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
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
    { id: 'sec-1', title: '제1조 목적' },
    { id: 'sec-2', title: '제2조 수집항목' },
    { id: 'sec-3', title: '제3조 보유기간' },
    { id: 'sec-4', title: '제4조 제3자 제공' },
    { id: 'sec-5', title: '제5조 처리위탁' },
    { id: 'sec-6', title: '제6조 정보주체 권리' },
    { id: 'sec-7', title: '제7조 파기절차' },
    { id: 'sec-8', title: '제8조 안전성 확보' },
    { id: 'sec-9', title: '제9조 쿠키운영' },
    { id: 'sec-10', title: '제10조 보호책임자' },
    { id: 'sec-11', title: '제11조 열람청구' },
    { id: 'sec-12', title: '제12조 권익침해' },
    { id: 'sec-13', title: '제13조 방침변경' },
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 animate-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-6">Legal Document</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary leading-none">개인정보처리방침</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sticky Navigation Index */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-2 border-l border-slate-100 pl-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/20 mb-6">Contents Index</p>
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
              Medical Korea Systems(이하 '회사')는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            </p>

            <section id="sec-1" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 1 조 (개인정보의 처리 목적)</h2>
              <p className="mb-4">회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="font-bold text-primary shrink-0">1.</span>
                  <span><strong>홈페이지 회원가입 및 관리:</strong> 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary shrink-0">2.</span>
                  <span><strong>민원사무 처리:</strong> 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary shrink-0">3.</span>
                  <span><strong>재화 또는 서비스 제공:</strong> 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증 등을 목적으로 개인정보를 처리합니다.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary shrink-0">4.</span>
                  <span><strong>마케팅 및 광고에의 활용:</strong> 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 서비스의 유효성 확인, 접속빈도 파악 등을 목적으로 합니다.</span>
                </li>
              </ul>
            </section>

            <section id="sec-2" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 2 조 (처리하는 개인정보의 항목)</h2>
              <p className="mb-6">회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-bg-soft p-8 rounded-[32px] border border-slate-100">
                      <h3 className="font-black text-primary text-xs uppercase tracking-widest mb-4">문의 및 상담 신청</h3>
                      <p className="text-sm">필수: 이름, 이메일, 제목, 내용</p>
                      <p className="text-sm mt-2 opacity-60">선택: 연락처, 소속 기관명</p>
                  </div>
                  <div className="bg-bg-soft p-8 rounded-[32px] border border-slate-100">
                      <h3 className="font-black text-primary text-xs uppercase tracking-widest mb-4">자동 수집 항목</h3>
                      <p className="text-sm">IP주소, 쿠키, 서비스 이용기록, 접속 로그, 불량 이용기록 등</p>
                  </div>
              </div>
            </section>

            <section id="sec-3" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 3 조 (개인정보의 처리 및 보유 기간)</h2>
              <div className="space-y-4">
                <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 기간 내에서 개인정보를 처리·보유합니다.</p>
                <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/5">
                  <ul className="space-y-3 text-sm font-medium text-primary">
                    <li className="flex justify-between border-b border-primary/5 pb-2"><span>홈페이지 문의 접수 및 상담</span> <span>3년</span></li>
                    <li className="flex justify-between border-b border-primary/5 pb-2"><span>소비자 불만 또는 분쟁처리</span> <span>3년</span></li>
                    <li className="flex justify-between"><span>방문에 관한 기록(로그)</span> <span>3개월</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="sec-4" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 4 조 (개인정보의 제3자 제공)</h2>
              <p>회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의 또는 법률의 특별한 규정에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
            </section>

            <section id="sec-5" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 5 조 (개인정보처리의 위탁)</h2>
              <p>회사는 원활한 업무처리를 위하여 아래와 같이 위탁하고 있으며, 수탁자가 관련 법령에 따라 개인정보를 안전하게 처리하도록 감독하고 있습니다.</p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li><strong>수탁자:</strong> 클라우드 서비스 제공사 (AWS, Google Cloud 등)</li>
                <li><strong>위탁업무:</strong> 데이터 보관 및 시스템 보안 운영</li>
              </ul>
            </section>

            <section id="sec-6" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 6 조 (정보주체의 권리·의무 및 행사방법)</h2>
              <p>정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다. 권리 행사는 서면, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
            </section>

            <section id="sec-7" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 7 조 (개인정보의 파기)</h2>
              <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 정보를 파기합니다. 전자적 파일은 기술적 방법으로 삭제하며, 종이 문서는 분쇄하거나 소각합니다.</p>
            </section>

            <section id="sec-8" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 8 조 (개인정보의 안전성 확보 조치)</h2>
              <p>회사는 내부관리계획 수립, 접근권한 제한, 보안프로그램 설치, 물리적 통제 등 기술적/관리적/물리적 안전조치를 이행하고 있습니다.</p>
            </section>

            <section id="sec-9" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 9 조 (개인정보 자동 수집 장치의 설치·운영 및 거부)</h2>
              <p>회사는 맞춤형 서비스를 제공하기 위해 쿠키(cookie)를 사용합니다. 이용자는 웹브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.</p>
            </section>

            <section id="sec-10" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 10 조 (개인정보 보호책임자)</h2>
              <div className="bg-bg-soft p-10 rounded-[40px] border border-slate-100">
                <p className="font-black text-primary mb-4 uppercase tracking-widest text-xs">Chief Privacy Officer</p>
                <p className="text-lg font-bold text-primary">관리 총괄 책임자</p>
                <p className="mt-2">이메일: info@medicalohub.com</p>
                <p className="text-xs mt-6 opacity-40 italic">※ 개인정보 보호 관련 고충 처리 및 피해구제 상담 전담</p>
              </div>
            </section>

            <section id="sec-11" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 11 조 (개인정보 열람청구)</h2>
              <p>정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 고객지원팀(info@medicalohub.com)을 통해 하실 수 있습니다.</p>
            </section>

            <section id="sec-12" className="scroll-mt-32">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 12 조 (권익침해 구제방법)</h2>
              <ul className="space-y-2 text-sm">
                <li>• 개인정보침해신고센터: (국번없이) 118</li>
                <li>• 개인정보분쟁조정위원회: (국번없이) 1833-6972</li>
                <li>• 대검찰청 사이버수사과: (국번없이) 1301</li>
              </ul>
            </section>

            <section id="sec-13" className="scroll-mt-32 pb-40">
              <h2 className="text-2xl font-black text-primary mb-6 tracking-tight">제 13 조 (개인정보 처리방침 변경)</h2>
              <p>이 방침은 2024년 1월 1일부터 적용됩니다. 변경사항이 있는 경우 시행 7일 전부터 공지사항을 통해 고지할 예정입니다.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
