import { motion } from "motion/react";
import { ArrowRight, BatteryWarning, HeartCrack, PenTool, UserX, Ghost, ChevronRight } from "lucide-react";
import React from "react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--color-accent)] selection:text-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=2500" 
            alt="Người đứng giữa dòng người" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paper)] via-[var(--color-paper)]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-[var(--color-gold)] font-sans tracking-widest uppercase text-sm md:text-base font-bold mb-6">
              99 Ngày Tỉnh Giấc: Đại Phẫu Tâm Hồn
            </h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-bold text-[var(--color-ink-dark)] mb-8">
              Bạn đang thực sự <span className="italic text-[var(--color-gold)]">Sống</span>,<br />
              hay chỉ đang <span className="underline decoration-[var(--color-gold)] underline-offset-8 px-2">Mộng du</span> qua từng ngày?
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2} className="max-w-2xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-[var(--color-muted-dark)] font-sans leading-relaxed">
              Đã đến lúc ngừng làm nô lệ cho những cảm xúc hỗn loạn. Thử thách 99 Ngày Thực Hành Tâm Thức Cơ Bản – Hành trình "đại phẫu" nội tâm, giành lại quyền làm chủ cuộc đời từ tay Vô thức.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] shadow-lg shadow-[#5a6c572a] transition-all duration-300 rounded-full text-lg overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                TÔI MUỐN TỈNH GIẤC NGAY HÔM NAY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: CHẠM VÀO NỖI ĐAU */}
      <section className="py-24 px-6 relative border-t border-[var(--color-border)] bg-[var(--color-paper)]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 md:mb-24 text-[var(--color-ink-dark)] max-w-3xl mx-auto leading-tight relative">
              <span className="text-[var(--color-muted)] block text-lg font-sans uppercase tracking-[0.2em] mb-4">Hãy thành thật với chính mình...</span>
              Đã bao lần bạn cảm thấy:
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
            <FadeIn delay={0.1} className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[var(--color-border)] shadow-sm">
                  <HeartCrack className="w-6 h-6 text-[var(--color-gold)]" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3 text-[var(--color-ink-dark)]">Mất kiểm soát</h3>
                <p className="text-[var(--color-muted-dark)] leading-relaxed text-lg">
                  Vừa hứa sẽ kiên nhẫn với con, nhưng chỉ 5 phút sau lại gầm lên tức giận rồi đêm về nằm dằn vặt?
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[var(--color-border)] shadow-sm">
                  <BatteryWarning className="w-6 h-6 text-[var(--color-gold)]" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3 text-[var(--color-ink-dark)]">Bận rộn ảo</h3>
                <p className="text-[var(--color-muted-dark)] leading-relaxed text-lg">
                  Làm việc quần quật 10 tiếng/ngày, lướt điện thoại vô thức, nhưng cuối ngày thấy lòng trống rỗng, chẳng tạo ra giá trị gì?
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[var(--color-border)] shadow-sm">
                  <UserX className="w-6 h-6 text-[var(--color-gold)]" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3 text-[var(--color-ink-dark)]">Cay cú và Đổ lỗi</h3>
                <p className="text-[var(--color-muted-dark)] leading-relaxed text-lg">
                  Luôn thấy người khác sai, thấy sếp bất công, thấy vợ/chồng không hiểu mình. Ôm cục tức vào lòng khiến cơ thể nặng trĩu, bệnh tật?
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[var(--color-border)] shadow-sm">
                  <Ghost className="w-6 h-6 text-[var(--color-gold)]" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3 text-[var(--color-ink-dark)]">Sống vỏ bọc</h3>
                <p className="text-[var(--color-muted-dark)] leading-relaxed text-lg">
                  Cố tỏ ra mình ổn, mình tài giỏi trên mạng xã hội, nhưng sâu thẳm bên trong là nỗi sợ hãi, tự ti và kiệt quệ năng lượng?
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="mt-24 p-8 md:p-12 rounded-3xl bg-[var(--color-surface-alt)] border border-[var(--color-border)] text-[var(--color-ink)] max-w-4xl mx-auto shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <h4 className="font-serif text-2xl md:text-3xl font-bold mb-6 italic text-[var(--color-ink-dark)]">Đó không phải là BẠN. Đó là VÔ THỨC đang điều khiển bạn!</h4>
            <p className="text-lg md:text-xl font-sans font-medium text-[var(--color-muted-dark)] leading-relaxed">
               Khi sống trong Vô thức, chúng ta chỉ là những cỗ máy phản ứng bản năng. Chúng ta để cho nỗi sợ, lòng tham, sự sân hận "cầm lái" cuộc đời mình. Kết quả? Ta trượt dài xuống Vùng Hủy Diệt của sự bế tắc và khổ đau.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: GIẢI PHÁP */}
      <section className="py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-ink-dark)] leading-tight mb-8">
                Bí mật của những người bình an và thành tựu: <span className="block mt-4 text-[var(--color-gold)] italic font-normal text-3xl md:text-4xl">Họ không giỏi chịu đựng, họ có TÂM THỨC.</span>
              </h2>
              <p className="text-xl text-[var(--color-muted-dark)]">
                Tâm thức là gì? Là khả năng <strong className="text-[var(--color-ink)] font-bold tracking-wide">DỪNG LẠI</strong> ở điểm xúc chạm. Là sự tĩnh tại để nhìn thấu bản chất sự việc thay vì phản ứng mù quáng.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-sm">
              <div className="bg-[var(--color-surface)] p-8 md:p-12">
                <h3 className="font-display uppercase tracking-widest text-[var(--color-gold)] font-bold mb-8 text-xs flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
                  Khi Sống Bằng Vô Thức (Bóng Tối)
                </h3>
                <ul className="space-y-8">
                  <li className="flex flex-col gap-2">
                    <span className="text-[var(--color-muted)] text-xs uppercase tracking-widest font-bold opacity-70">Phản ứng</span>
                    <span className="text-sm font-medium text-[var(--color-ink)]">Bùng nổ, cãi vã, đập phá.</span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <span className="text-[var(--color-muted)] text-xs uppercase tracking-widest font-bold opacity-70">Tư duy</span>
                    <span className="text-sm font-medium text-[var(--color-ink)]">Đổ lỗi ("Tại họ làm tôi tức").</span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <span className="text-[var(--color-muted)] text-xs uppercase tracking-widest font-bold opacity-70">Hành động</span>
                    <span className="text-sm font-medium text-[var(--color-ink)]">Nông nổi, chắp vá, bỏ cuộc.</span>
                  </li>
                  <li className="flex flex-col gap-2 pt-6 border-t border-[var(--color-border)]">
                    <span className="text-[var(--color-gold)] text-xs uppercase tracking-widest font-bold">Kết quả</span>
                    <span className="text-base font-bold text-[var(--color-ink)]">Năng lượng cạn kiệt, cô đơn.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[var(--color-accent)] p-8 md:p-12 text-white relative">
                <h3 className="font-display uppercase tracking-widest text-white/80 font-bold mb-8 text-xs flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  Khi Sống Bằng Tâm Thức (Ánh Sáng)
                </h3>
                <ul className="space-y-8">
                  <li className="flex flex-col gap-2">
                    <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Làm chủ</span>
                    <span className="text-sm font-medium">Tĩnh tại, ngậm miệng, lùi lại quan sát.</span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Tư duy</span>
                    <span className="text-sm font-medium">Nhận trách nhiệm ("Tôi chọn cách phản ứng này").</span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Hành động</span>
                    <span className="text-sm font-medium">Có trật tự, thấu tình đạt lý, làm đến cùng.</span>
                  </li>
                  <li className="flex flex-col gap-2 pt-6 border-t border-white/20">
                    <span className="text-white text-xs uppercase tracking-widest font-bold opacity-90">Kết quả</span>
                    <span className="text-base font-bold">Nhựa sống tuôn trào, thu hút thiện duyên.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: THỬ THÁCH 99 NGÀY */}
      <section className="py-24 px-6 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink-dark)] mb-6">
                99 Ngày "Đại Phẫu Tâm Hồn" <br />
                <span className="italic text-[var(--color-gold)] font-normal">Không nghe lý thuyết, chỉ có Thực Hành!</span>
              </h2>
              <p className="text-xl text-[var(--color-muted-dark)] max-w-3xl mx-auto leading-relaxed">
                Hành trình này không dành cho những ai thích những lời vuốt ve sáo rỗng. Đây là Lò Bát Quái để bạn tự rèn mình. Mỗi ngày, bạn chỉ cần dành ra 30 phút buổi tối để làm đúng MỘT việc: <strong>Viết Nhật Ký Tâm Thức Cơ Bản.</strong>
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Split line visual */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent hidden md:block" />

            <div className="space-y-16 md:space-y-0">
              <FadeIn delay={0.2} className="md:w-1/2 md:-ml-8 md:pr-16 relative">
                <div className="bg-white border border-[var(--color-border)] p-8 md:p-10 rounded-2xl md:ml-8 relative z-10 shadow-sm">
                  <div className="absolute -top-6 -left-6 md:-left-8 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--color-paper)] border-2 border-[var(--color-ink)] flex items-center justify-center font-serif text-2xl text-[var(--color-ink)] italic">01</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-[var(--color-ink-dark)] pb-4 border-b border-[var(--color-border)]">
                    TỜ 1: BÓC TÁCH VÙNG TỐI <br/>
                    <span className="text-[var(--color-muted)] text-lg font-sans font-normal">(Viết cho Vô thức)</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <ChevronRight className="w-5 h-5 mt-1 shrink-0 text-[var(--color-gold)]" />
                      <p className="text-lg text-[var(--color-muted-dark)]">Lôi <strong className="text-[var(--color-ink)]">1 sự việc</strong> bạn đã hành xử "tệ" nhất trong ngày ra ánh sáng.</p>
                    </li>
                    <li className="flex gap-4">
                      <ChevronRight className="w-5 h-5 mt-1 shrink-0 text-[var(--color-gold)]" />
                      <p className="text-lg text-[var(--color-muted-dark)]">Trung thực tuyệt đối, không ngụy biện, không dùng từ "Nhưng". Dám nhìn thẳng vào sự tham lam, sân hận, yếu kém của bản ngã.</p>
                    </li>
                    <li className="flex gap-4">
                      <ChevronRight className="w-5 h-5 mt-1 shrink-0 text-[var(--color-gold)]" />
                      <p className="text-lg text-[var(--color-muted-dark)] italic">Viết cho đến khi thấy "chột dạ" và xấu hổ với chính mình.</p>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} className="md:w-1/2 md:ml-auto md:-mr-8 md:pl-16 relative md:-mt-12">
                <div className="bg-[var(--color-paper)] border border-[var(--color-border)] p-8 md:p-10 rounded-2xl md:mr-8 relative z-10 text-[var(--color-ink)] shadow-md">
                  <div className="absolute -top-6 -right-6 md:-right-8 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--color-paper)] border-2 border-[var(--color-accent)] flex items-center justify-center font-serif text-2xl text-[var(--color-accent)] italic shadow-xl">02</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-[var(--color-ink)] pb-4 border-b border-[var(--color-border)]">
                    TỜ 2: KIẾN TẠO VÙNG SÁNG <br/>
                    <span className="text-[var(--color-muted)] text-lg font-sans font-normal">(Viết cho Tâm thức)</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <ChevronRight className="w-5 h-5 mt-1 shrink-0 text-[var(--color-accent)]" />
                      <p className="text-lg text-[var(--color-ink-dark)]">Đứng ở vị trí của Trí tuệ và Từ bi, viết lại kịch bản xử lý sự việc đó.</p>
                    </li>
                    <li className="flex gap-4">
                      <ChevronRight className="w-5 h-5 mt-1 shrink-0 text-[var(--color-accent)]" />
                      <p className="text-lg text-[var(--color-ink-dark)]">Mình sẽ làm gì để tháo gỡ? Mình dùng sự tĩnh lặng, sự thấu cảm nào để chuyển hóa vấn đề?</p>
                    </li>
                    <li className="flex gap-4">
                      <ChevronRight className="w-5 h-5 mt-1 shrink-0 text-[var(--color-accent)]" />
                      <p className="text-lg font-bold">Đúc kết lại bài học sâu sắc nhất để làm vốn liếng cho ngày mai.</p>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.6} className="mt-24 md:mt-32 max-w-3xl mx-auto text-center border border-[var(--color-border)] py-12 px-8 rounded-3xl bg-white shadow-sm">
            <h4 className="font-display uppercase tracking-widest text-[var(--color-gold)] font-bold mb-6 text-sm">Sự kỳ diệu</h4>
            <p className="text-xl md:text-2xl text-[var(--color-ink-dark)] font-serif leading-relaxed italic">
              Khi bạn liên tục "bóc rác" ở Tờ 1 và "trồng hoa" ở Tờ 2 trong 99 ngày, não bộ bạn sẽ hình thành những nếp nhăn mới. Phản xạ tiêu cực tự động đứt gãy, thay vào đó là sự Sáng Suốt tuôn trào tự nhiên.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5: THU HOẠCH */}
      <section className="py-24 px-6 border-t border-[var(--color-border)] relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[var(--color-surface)] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <span className="text-[var(--color-gold)] font-display uppercase tracking-widest text-sm font-bold block mb-4">Hành trang thu hoạch</span>
              <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink-dark)] leading-tight">
                Vượt qua 99 Ngày, phần thưởng lớn nhất chính là <br />
                <span className="underline decoration-[var(--color-gold)] underline-offset-8">GẶP LẠI CON NGƯỜI THẬT CỦA BẠN.</span>
              </h2>
              <p className="text-xl text-[var(--color-muted-dark)] mt-8">Bạn sẽ không còn là bạn của ngày hôm qua. Bạn sẽ cầm nắm được 3 quyền năng tối thượng:</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 border border-[var(--color-border)] rounded-3xl h-full flex flex-col hover:border-[var(--color-accent)] transition-colors bg-white shadow-sm">
                <div className="text-4xl mb-6 flex justify-center items-center w-16 h-16 rounded-full bg-[var(--color-surface)]">🌱</div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-ink-dark)] mb-4">Quản trị <br/><span className="text-[var(--color-muted)] font-normal">(TU) Bản thân</span></h3>
                <p className="text-[var(--color-muted-dark)] text-lg leading-relaxed flex-1">
                  Cột năng lượng sống luôn vững chãi. Không lời chê bai nào có thể xô ngã bạn. Bạn sống tự do, không phụ thuộc vào ánh nhìn của người đời.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 border border-[var(--color-border)] rounded-3xl h-full flex flex-col hover:border-[var(--color-accent)] transition-colors bg-white shadow-sm">
                <div className="text-4xl mb-6 flex justify-center items-center w-16 h-16 rounded-full bg-[var(--color-surface)]">💞</div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-ink-dark)] mb-4">Quản trị <br/><span className="text-[var(--color-muted)] font-normal">(HỌC cách yêu thương) Gia đình</span></h3>
                <p className="text-[var(--color-muted-dark)] text-lg leading-relaxed flex-1">
                  Đóng lại những cửa tử của sự cãi vã. Biến ngôi nhà thành "Đạo tràng" của sự thấu hiểu. Lời nói của bạn tự động mang hơi ấm và sự chữa lành.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-8 border border-[var(--color-border)] rounded-3xl h-full flex flex-col hover:border-[var(--color-accent)] transition-colors bg-white shadow-sm">
                <div className="text-4xl mb-6 flex justify-center items-center w-16 h-16 rounded-full bg-[var(--color-surface)]">🚀</div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-ink-dark)] mb-4">Quản trị <br/><span className="text-[var(--color-muted)] font-normal">(LÀM ra giá trị thật) Sự nghiệp</span></h3>
                <p className="text-[var(--color-muted-dark)] text-lg leading-relaxed flex-1">
                  Đầu óc minh định, tư duy sắc bén. Trở thành "Chuyên gia giải quyết vấn đề" mà bất cứ tổ chức nào cũng cần. Tiền bạc tự động tuôn về như hệ quả của giá trị thiện lành bạn gieo xuống.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 6: KẾT LUẬN & CTA */}
      <section className="py-24 px-6 border-t border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <blockquote className="font-serif text-3xl md:text-5xl text-center leading-tight mb-16 italic text-[var(--color-ink-dark)] relative">
              <span className="text-6xl text-[var(--color-gold)] opacity-20 absolute -top-10 -left-6">"</span>
              Chúng ta không thể thay đổi hướng gió, nhưng ta có toàn quyền chỉnh lại cánh buồm.
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.2} className="prose prose-lg md:prose-xl mx-auto text-[var(--color-muted-dark)] mb-16">
            <p className="font-bold text-[var(--color-ink-dark)]">Chào bạn, tôi là Khai Minh.</p>
            <p>Tôi ở đây không để ban phát cho bạn phép màu. Phép màu nằm sẵn trong chính đôi bàn tay và trí tuệ của bạn. Tôi chỉ đưa cho bạn công cụ sắc bén nhất – Thực hành Tâm thức Cơ bản – để bạn tự điêu khắc lại cuộc đời mình.</p>
            <p>99 ngày tới sẽ có lúc bạn thấy đau, thấy lười, thấy muốn bỏ cuộc vì cái Tôi chống cự. Nhưng hãy tin tôi, qua được "cơn bạo bệnh" này, bạn sẽ tận hưởng độ ngọt ngào của một sinh mệnh tự do.</p>
            <p className="font-serif italic font-bold text-2xl text-center my-12 text-[var(--color-ink-dark)]">Đừng đợi đến ngày mai. Hãy cầm bút lên, đối diện với chính mình ngay tối nay.</p>
          </FadeIn>

          <FadeIn delay={0.4} className="text-center">
            <button className="group relative inline-flex items-center justify-center px-10 py-5 font-display tracking-wide font-bold text-white bg-[var(--color-ink-dark)] hover:scale-[1.02] active:scale-95 transition-all duration-300 rounded-full text-xl shadow-lg border border-[var(--color-ink)] overflow-hidden w-full md:w-auto">
              <span className="relative z-10 flex items-center gap-3">
                TÔI CHỌN TỈNH THỨC - BẮT ĐẦU NGÀY 1
                <PenTool className="w-6 h-6" />
              </span>
            </button>
            
            <div className="mt-12 text-[var(--color-muted)] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm uppercase tracking-widest font-bold opacity-70">
              <a href="#" className="hover:text-[var(--color-ink-dark)] hover:opacity-100 transition-colors flex items-center gap-2">
                 Hướng dẫn tải mẫu Tờ 1, Tờ 2
              </a>
              <a href="#" className="hover:text-[var(--color-ink-dark)] hover:opacity-100 transition-colors flex items-center gap-2">
                 Link tham gia Group Đồng Tu
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
