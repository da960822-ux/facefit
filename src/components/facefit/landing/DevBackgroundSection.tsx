import { ScrollReveal } from "@/components/facefit/ScrollReveal";

export function DevBackgroundSection() {
  return (
    <section className="bg-[#fcfaf6] px-6 py-28 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[960px]">
        <ScrollReveal>
          <p className="font-heading text-sm font-bold tracking-[.12em] text-sunset-700">프로젝트 개발 배경</p>
          <h2 className="mt-5 max-w-[880px] text-3xl font-bold leading-[1.45] tracking-[-.035em] text-ink-900 md:text-4xl">
            질문을 <span className="text-ink-400">많이 푸는 것</span>보다,
            <br />한 번의 답변을 <span className="font-heading text-sunset-700">제대로 고치는 것</span>이 중요하다고 생각했습니다
          </h2>
          <div className="mt-10 space-y-6 border-l-2 border-sunset-300 pl-6 text-[15px] leading-[1.9] text-ink-600 md:pl-8 md:text-base">
            <p>
              개발자 취업 준비 과정에서는 <strong className="font-semibold text-ink-900">프로젝트 경험과 기술 지식</strong>이 있어도, 이를 면접관이 이해하기 쉬운 구조로 설명하는 일이 어렵습니다.
            </p>
            <p>
              기존의 질문 모음과 모범 답변은 무엇을 말해야 하는지는 알려주지만, <strong className="font-semibold text-sunset-700">내 답변에서 무엇이 부족했는지</strong>와 다음 답변에서 어떻게 바꿔야 하는지는 알려주지 못합니다.
            </p>
            <p>
              Face Fit은 질문을 반복해서 제공하는 서비스가 아니라, 사용자의 이력서와 실제 답변을 바탕으로 부족한 부분을 찾고 <strong className="font-semibold text-moss-900">다음 연습에서 스스로 개선하도록 돕는 것</strong>을 목표로 합니다.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
