import svgPaths from "./svg-8ipztisnj7";
import { imgGridType } from "./svg-p0r27";
type LowFiAvatarProps = {
  className?: string;
  size?: "Small";
};

function LowFiAvatar({ className, size = "Small" }: LowFiAvatarProps) {
  return (
    <div className={className || "bg-[#7c8b9d] relative rounded-[50px] size-[32px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="relative shrink-0 size-[14px]" data-name="photo Fill">
            <div className="absolute inset-[4.17%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="12.8333" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333" width="12.8333">
                <g id="Icon">
                  <path d={svgPaths.p1e92000} fill="white" />
                  <path clipRule="evenodd" d={svgPaths.p3aee3c80} fill="white" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type LoFiUxSideMenuSectionProps = {
  className?: string;
  avatar?: boolean;
  showLeadIcon?: boolean;
  showTagNotification?: boolean;
  showTrilingIcon?: boolean;
  state?: "Default" | "Current";
  type?: "Default" | "Icon Only";
};

function LoFiUxSideMenuSection({ className, avatar = false, showLeadIcon = true, showTagNotification = true, showTrilingIcon = true, state = "Default", type = "Default" }: LoFiUxSideMenuSectionProps) {
  const isDefaultAndCurrentAndNotAvatar = type === "Default" && state === "Current" && !avatar;
  const isDefaultAndNotAvatar = type === "Default" && !avatar;
  const isIconOnlyAndIsNotAvatarOrDefaultAndAvatar = type === "Icon Only" && (!avatar || (state === "Default" && avatar));
  return (
    <div className={className || `relative ${type === "Icon Only" && state === "Current" && !avatar ? "bg-[#d1d9e2] rounded-[5px] size-[48px]" : type === "Icon Only" && state === "Default" ? "rounded-[5px] size-[48px]" : isDefaultAndCurrentAndNotAvatar ? "bg-[#d1d9e2] h-[48px] w-[300px]" : "h-[48px] w-[300px]"}`}>
      <div className={`flex flex-row items-center size-full ${isIconOnlyAndIsNotAvatarOrDefaultAndAvatar ? "justify-center" : ""}`}>
        <div className={`content-stretch flex items-center relative size-full ${isIconOnlyAndIsNotAvatarOrDefaultAndAvatar ? "justify-center" : "gap-[12px] px-[28px] py-[11px]"}`}>
          {isDefaultAndNotAvatar && showLeadIcon && (
            <div className="overflow-clip relative shrink-0 size-[22px]" data-name="placeholder Fill">
              <div className="absolute inset-[9.83%_12.5%]" data-name="Icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="17.6761" preserveAspectRatio="none" viewBox="0 0 16.5 17.6761" width="16.5">
                  <path d={svgPaths.p1565700} fill="#7C8B9D" id="Icon" />
                </svg>
              </div>
            </div>
          )}
          {isDefaultAndNotAvatar && (
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Paragraph container">
              <div className="relative shrink-0 w-full" data-name=".Lo-fi Text">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                  <div className="h-[11px] relative shrink-0 w-full" data-name="Text">
                    <div className={`absolute inset-[0_15.08%_0_0] rounded-[50px] ${isDefaultAndCurrentAndNotAvatar ? "bg-[#7c8b9d]" : "bg-[#d1d9e2]"}`} data-name="Text" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {isDefaultAndNotAvatar && showTagNotification && (
            <div className="bg-[#7c8b9d] h-[20px] relative rounded-[20px] shrink-0 w-[21px]" data-name="Low-Fi Tag Notification">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="relative size-full" />
              </div>
            </div>
          )}
          {isDefaultAndNotAvatar && showTrilingIcon && (
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron/down regular">
              <div className="absolute bottom-[35.06%] left-1/4 right-1/4 top-[41.67%]" data-name="Icon">
                <div className="absolute inset-[-14.95%_-6.96%]">
                  <svg className="block size-full" fill="none" height="7.25579" preserveAspectRatio="none" viewBox="0 0 13.67 7.25579" width="13.67">
                    <path d={svgPaths.p2370e00} id="Icon" stroke="#5F6D7E" strokeLinecap="round" strokeWidth="1.67" />
                  </svg>
                </div>
              </div>
            </div>
          )}
          {type === "Icon Only" && !avatar && (
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="placeholder Fill">
              <div className="absolute inset-[9.83%_12.5%]" data-name="Icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="19.283" preserveAspectRatio="none" viewBox="0 0 18 19.283" width="18">
                  <path d={svgPaths.p32d7ca00} fill="#7C8B9D" id="Icon" />
                </svg>
              </div>
            </div>
          )}
          {isDefaultAndCurrentAndNotAvatar && <div className="absolute bg-[#7c8b9d] bottom-0 left-0 top-0 w-[3px]" />}
          {type === "Icon Only" && state === "Default" && avatar && <LowFiAvatar className="bg-[#7c8b9d] relative rounded-[50px] shrink-0 size-[32px]" />}
        </div>
      </div>
    </div>
  );
}
type LookscoutProps = {
  className?: string;
  type?: "Lookscout" | "Lookscout Glyph";
};

function Lookscout({ className, type = "Lookscout" }: LookscoutProps) {
  const isLookscoutGlyph = type === "Lookscout Glyph";
  return (
    <div className={className || `relative ${isLookscoutGlyph ? "size-[32px]" : "h-[32px] w-[128px]"}`}>
      {type === "Lookscout" && (
        <div className="absolute inset-[15%_3.13%]" data-name="Lookscout">
          <svg className="absolute block inset-0 size-full" fill="none" height="22.4" preserveAspectRatio="none" viewBox="0 0 120 22.4" width="120">
            <g id="h">
              <path d={svgPaths.p1038ba70} fill="#5F6D7E" />
              <path d={svgPaths.p2ceb4800} fill="#5F6D7E" />
              <path d={svgPaths.pd75ba00} fill="#5F6D7E" />
              <path d={svgPaths.p1a8ee400} fill="#5F6D7E" />
              <path d={svgPaths.p27e66f00} fill="#5F6D7E" />
              <path d={svgPaths.p1d78ca00} fill="#5F6D7E" />
              <path d={svgPaths.p1eeff080} fill="#5F6D7E" />
              <path d={svgPaths.p1a721700} fill="#5F6D7E" />
              <path d={svgPaths.p3df97100} fill="#5F6D7E" />
              <path d={svgPaths.p3bfaf100} fill="#5F6D7E" />
              <path d={svgPaths.p18bb2900} fill="#5F6D7E" />
              <path d={svgPaths.p10b32600} fill="#5F6D7E" />
            </g>
          </svg>
        </div>
      )}
      {isLookscoutGlyph && (
        <div className="absolute inset-[12.5%_17.51%]" data-name="Logo">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 20.7912 24" width="20.7912">
            <g id="Logo">
              <path d={svgPaths.p32bdac80} fill="#5F6D7E" />
              <path d={svgPaths.p8479d00} fill="#5F6D7E" />
              <path d={svgPaths.p212d2f00} fill="#5F6D7E" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Section container">
      <div className="relative rounded-[5px] shrink-0 size-[48px]" data-name=".Low-Fi Side menu section">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="placeholder Fill">
              <div className="absolute inset-[9.83%_12.5%]" data-name="Icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="19.283" preserveAspectRatio="none" viewBox="0 0 18 19.283" width="18">
                  <path d={svgPaths.p32d7ca00} fill="#7C8B9D" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoFiUxSideMenuSection className="relative rounded-[5px] shrink-0 size-[48px]" type="Icon Only" />
      <LoFiUxSideMenuSection className="relative rounded-[5px] shrink-0 size-[48px]" type="Icon Only" />
      <LoFiUxSideMenuSection className="relative rounded-[5px] shrink-0 size-[48px]" type="Icon Only" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Lookscout className="relative shrink-0 size-[32px]" type="Lookscout Glyph" />
      <SectionContainer />
    </div>
  );
}

function SideMenuHeader() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name=".Side menu header">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[28px] relative size-full">
          <div className="h-[32px] relative shrink-0 w-[128px]" data-name="Lookscout">
            <div className="absolute inset-[15%_3.13%]" data-name="h">
              <svg className="absolute block inset-0 size-full" fill="none" height="22.4" preserveAspectRatio="none" viewBox="0 0 120 22.4" width="120">
                <g id="h">
                  <path d={svgPaths.p1038ba70} fill="#5F6D7E" />
                  <path d={svgPaths.p2ceb4800} fill="#5F6D7E" />
                  <path d={svgPaths.pd75ba00} fill="#5F6D7E" />
                  <path d={svgPaths.p1a8ee400} fill="#5F6D7E" />
                  <path d={svgPaths.p27e66f00} fill="#5F6D7E" />
                  <path d={svgPaths.p1d78ca00} fill="#5F6D7E" />
                  <path d={svgPaths.p1eeff080} fill="#5F6D7E" />
                  <path d={svgPaths.p1a721700} fill="#5F6D7E" />
                  <path d={svgPaths.p3df97100} fill="#5F6D7E" />
                  <path d={svgPaths.p3bfaf100} fill="#5F6D7E" />
                  <path d={svgPaths.p18bb2900} fill="#5F6D7E" />
                  <path d={svgPaths.p10b32600} fill="#5F6D7E" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Text">
      <div className="absolute bg-[#d1d9e2] inset-[0_15.08%_0_0] rounded-[50px]" data-name="Text" />
    </div>
  );
}

function ParagraphContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Paragraph container">
      <div className="relative shrink-0 w-full" data-name=".Lo-fi Text">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Text">
      <div className="absolute bg-[#d1d9e2] inset-[0_15.08%_0_0] rounded-[50px]" data-name="Text" />
    </div>
  );
}

function ParagraphContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Paragraph container">
      <div className="relative shrink-0 w-full" data-name=".Lo-fi Text">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function GroupSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Group section">
      <div className="h-[48px] relative shrink-0 w-full" data-name=".Low-Fi Side menu section">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[28px] py-[11px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[22px]" data-name="placeholder Fill">
              <div className="absolute inset-[9.83%_12.5%]" data-name="Icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="17.6761" preserveAspectRatio="none" viewBox="0 0 16.5 17.6761" width="16.5">
                  <path d={svgPaths.p1565700} fill="#7C8B9D" id="Icon" />
                </svg>
              </div>
            </div>
            <ParagraphContainer />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name=".Low-Fi Side menu section">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[28px] py-[11px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[22px]" data-name="placeholder Fill">
              <div className="absolute inset-[9.83%_12.5%]" data-name="Icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="17.6761" preserveAspectRatio="none" viewBox="0 0 16.5 17.6761" width="16.5">
                  <path d={svgPaths.p1565700} fill="#7C8B9D" id="Icon" />
                </svg>
              </div>
            </div>
            <ParagraphContainer1 />
          </div>
        </div>
      </div>
      <LoFiUxSideMenuSection className="h-[48px] relative shrink-0 w-full" showTagNotification={false} showTrilingIcon={false} />
      <LoFiUxSideMenuSection className="h-[48px] relative shrink-0 w-full" showTagNotification={false} showTrilingIcon={false} />
    </div>
  );
}

function Sections() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px relative w-full" data-name="Sections">
      <GroupSection />
    </div>
  );
}

function VerticalContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-name="Vertical container">
      <div className="bg-[#7c8b9d] relative rounded-[50px] shrink-0 size-[32px]" data-name="Low-Fi Avatar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="photo Fill">
              <div className="absolute inset-[4.17%]" data-name="Icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="12.8333" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333" width="12.8333">
                  <g id="Icon">
                    <path d={svgPaths.p1e92000} fill="white" />
                    <path clipRule="evenodd" d={svgPaths.p3aee3c80} fill="white" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[10px] relative shrink-0 w-full" data-name="Text">
      <div className="absolute bg-[#7c8b9d] inset-[0_56.49%_0_0] rounded-[50px]" data-name="Text" />
    </div>
  );
}

function ContentIndicator() {
  return <div className="absolute h-[8px] right-0 top-0 w-[80px]" data-name="Content indicator" />;
}

function ProgressLine() {
  return (
    <div className="absolute h-[8px] left-0 right-1/2 top-0" data-name="Progress line">
      <ContentIndicator />
      <div className="absolute bg-[#7c8b9d] h-[8px] left-0 right-0 rounded-[5px] top-0" data-name="Line" />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#d1d9e2] flex-[1_0_0] h-[8px] min-w-px relative rounded-[5px]" data-name="Progress Bar">
      <ProgressLine />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Text input">
      <div className="relative shrink-0 w-full" data-name=".Lo-fi Text">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
          <Text2 />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Low-Fi Progress">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center relative size-full">
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}

function Task() {
  return (
    <div className="content-stretch flex gap-[12px] items-start py-px relative shrink-0 w-full" data-name="Task">
      <VerticalContainer />
      <TextInput />
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Projects">
      <Task />
    </div>
  );
}

function WidgetsNav() {
  return (
    <div className="relative shrink-0 w-full" data-name=".Widgets Nav">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[28px] py-[15px] relative size-full">
          <Projects />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Text">
      <div className="absolute bg-[#7c8b9d] inset-[0_15.08%_0_0] rounded-[50px]" data-name="Text" />
    </div>
  );
}

function ParagraphContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mb-[-2px] relative shrink-0 w-full" data-name="Paragraph container">
      <div className="relative shrink-0 w-full" data-name=".Lo-fi Text">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Text">
      <div className="absolute bg-[#d1d9e2] inset-[0_15.08%_0_0] rounded-[50px]" data-name="Text" />
    </div>
  );
}

function ParagraphContainer2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[380px] top-[34px] w-[190px]" data-name="Paragraph container">
      <ParagraphContainer3 />
      <div className="relative shrink-0 w-full" data-name=".Lo-fi Text">
        <div className="content-stretch flex flex-col gap-[6px] items-start py-[7px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[30px] top-[24px] w-[474px]" data-name="Top">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] not-italic relative shrink-0 text-[#21272a] text-[16px] whitespace-nowrap">Elbow Curve (Inertia)</p>
    </div>
  );
}

function HorizontalRulles() {
  return (
    <div className="absolute inset-[0_0_0.59%_2px] overflow-clip" data-name="horizontal rulles">
      <div className="absolute inset-[82.69%_0_16.72%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 h-[2px] left-0 right-0" data-name="hr">
        <div className="absolute bottom-1/4 left-[-0.21%] right-[-0.21%] top-1/4">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[2px] left-0 right-0 top-0" data-name="hr">
        <div className="absolute bottom-1/4 left-[-0.21%] right-[-0.21%] top-1/4">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.42%_0_82.99%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.84%_0_66.57%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.55%_0_49.85%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[65.97%_0_33.43%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function VerticalRulles() {
  return (
    <div className="absolute inset-[1px_-0.14%_3px_0.14%] overflow-clip" data-name="vertical rulles">
      <div className="absolute inset-[0.3%_4.81%_0_94.91%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_13.01%_0_86.71%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_21.21%_0_78.5%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_29.42%_0_70.3%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_37.62%_0_62.1%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_45.82%_0_53.89%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_54.03%_0_45.69%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_62.23%_0_37.49%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_70.44%_0_29.28%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_78.64%_0_21.08%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_86.84%_0_12.87%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_95.05%_0_4.67%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[0.3%] left-[0.02px] top-0 w-[2px]" data-name="vr">
        <div className="absolute bottom-[-0.26%] left-1/4 right-1/4 top-[-0.26%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 right-[0.98px] top-px w-[2px]" data-name="vr">
        <div className="absolute bottom-[-0.26%] left-1/4 right-1/4 top-[-0.26%]">
          <svg className="block size-full" fill="none" height="192" preserveAspectRatio="none" viewBox="0 0 1 192" width="1">
            <path d="M0.5 0.5V191.5" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function GridType() {
  return (
    <div className="absolute inset-[61px_266.75px_-27.11px_47.25px] overflow-clip" data-name="Grid Type">
      <div className="absolute inset-[0.9%_0.14%_-1.19%_-0.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.666px_-1.746px] mask-size-[235px_195px] mix-blend-multiply" style={{ maskImage: `url("${imgGridType}")` }} data-name="Grid Type">
        <HorizontalRulles />
        <VerticalRulles />
      </div>
      <div className="absolute bg-black h-[241.719px] left-[-1.29px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.294px_-2.158px] mask-size-[235px_195px] mix-blend-saturation top-[2.16px] w-[457.647px]" style={{ maskImage: `url("${imgGridType}")` }} data-name="Grayscale filter" />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Roboto:Medium',sans-serif] font-medium gap-[18px] h-[205px] items-end leading-[normal] left-[16.25px] text-[#69737d] text-[12px] text-right top-[58px] w-[22px] whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        1400
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        1200
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        1000
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        800
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        600
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        400
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        200
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[16.25px] top-[58px]">
      <GridType />
      <div className="-translate-y-1/2 absolute h-0 left-[48px] right-[269px] top-[calc(50%+143.55px)]" data-name="axis-x">
        <div className="absolute inset-[-0.5px_-0.22%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 233 1" width="233">
            <path d="M0.5 0.5H232.5" id="axis-x" stroke="#69737D" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-28.11px] left-[47.25px] top-[64px] w-[2px]" data-name="axis-y">
        <div className="absolute bottom-[-0.26%] left-1/4 right-1/4 top-[-0.26%]">
          <svg className="block size-full" fill="none" height="194" preserveAspectRatio="none" viewBox="0 0 1 194" width="1">
            <path d="M0.5 0.5V193.5" id="axis-y" stroke="#69737D" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame />
      <div className="absolute inset-[42.38%_48.95%_-11.84%_8.97%]" data-name="Line">
        <div className="absolute inset-[-0.94%_-0.65%]">
          <svg className="block size-full" fill="none" height="162" preserveAspectRatio="none" viewBox="0 0 234 162" width="234">
            <path d={svgPaths.pdd75600} id="Line" stroke="url(#paint0_linear_0_585)" strokeLinecap="round" strokeWidth="3" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_585" x1="2681.39" x2="331.593" y1="86.3475" y2="1050.25">
                <stop stopColor="#5073B8" />
                <stop offset="0.166952" stopColor="#6DC175" />
                <stop offset="1" stopColor="#6EC2AE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-black h-[192.82px] left-[70px] mix-blend-saturation top-[58px] w-[447.75px]" data-name="Grayscale filter" />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[228.892px] left-[403px] rounded-bl-[40px] rounded-br-[48px] top-[254px] w-[549px]" data-name="Content">
      <Top />
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[403px] top-[254px]">
      <Content />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[457px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[504px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[552px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        4
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[600px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[644px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        6
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[687px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        7
      </p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[380px] top-[254px]">
      <div className="absolute bg-[#d9d9d9] h-[294px] left-[380px] rounded-[15px] top-[258px] w-[332px]" />
      <Group8 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[380px] top-[254px]">
      <Group12 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[380px] top-[254px]">
      <Group11 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[380px] top-[254px]">
      <Group10 />
    </div>
  );
}

function Top1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[30px] top-[24px] w-[474px]" data-name="Top">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] not-italic relative shrink-0 text-[#21272a] text-[16px] whitespace-nowrap">Silhouette Score per K</p>
    </div>
  );
}

function HorizontalRulles1() {
  return (
    <div className="absolute inset-[0_0_0.59%_2px] overflow-clip" data-name="horizontal rulles">
      <div className="absolute inset-[82.69%_0_16.72%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 h-[2px] left-0 right-0" data-name="hr">
        <div className="absolute bottom-1/4 left-[-0.21%] right-[-0.21%] top-1/4">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[2px] left-0 right-0 top-0" data-name="hr">
        <div className="absolute bottom-1/4 left-[-0.21%] right-[-0.21%] top-1/4">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.42%_0_82.99%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.84%_0_66.57%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.55%_0_49.85%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[65.97%_0_33.43%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function VerticalRulles1() {
  return (
    <div className="absolute inset-[1px_-0.14%_3px_0.14%] overflow-clip" data-name="vertical rulles">
      <div className="absolute inset-[0.3%_4.81%_0_94.91%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_13.01%_0_86.71%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_21.21%_0_78.5%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_29.42%_0_70.3%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_37.62%_0_62.1%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_45.82%_0_53.89%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_54.03%_0_45.69%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_62.23%_0_37.49%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_70.44%_0_29.28%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_78.64%_0_21.08%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_86.84%_0_12.87%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_95.05%_0_4.67%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[0.3%] left-[0.02px] top-0 w-[2px]" data-name="vr">
        <div className="absolute bottom-[-0.26%] left-1/4 right-1/4 top-[-0.26%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 right-[0.98px] top-px w-[2px]" data-name="vr">
        <div className="absolute bottom-[-0.26%] left-1/4 right-1/4 top-[-0.26%]">
          <svg className="block size-full" fill="none" height="192" preserveAspectRatio="none" viewBox="0 0 1 192" width="1">
            <path d="M0.5 0.5V191.5" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function GridType1() {
  return (
    <div className="absolute inset-[61px_266.75px_-27.11px_47.25px] overflow-clip" data-name="Grid Type">
      <div className="absolute inset-[0.9%_0.14%_-1.19%_-0.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.666px_-1.746px] mask-size-[235px_195px] mix-blend-multiply" style={{ maskImage: `url("${imgGridType}")` }} data-name="Grid Type">
        <HorizontalRulles1 />
        <VerticalRulles1 />
      </div>
      <div className="absolute bg-black h-[241.719px] left-[-1.29px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.294px_-2.158px] mask-size-[235px_195px] mix-blend-saturation top-[2.16px] w-[457.647px]" style={{ maskImage: `url("${imgGridType}")` }} data-name="Grayscale filter" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Roboto:Medium',sans-serif] font-medium gap-[18px] h-[205px] items-end leading-[normal] left-[16.25px] text-[#69737d] text-[12px] text-right top-[58px] w-[22px] whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        1400
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        1200
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        1000
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        800
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        600
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        400
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        200
      </p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[16.25px] top-[58px]">
      <GridType1 />
      <div className="-translate-y-1/2 absolute h-0 left-[48px] right-[269px] top-[calc(50%+143.55px)]" data-name="axis-x">
        <div className="absolute inset-[-0.5px_-0.22%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 233 1" width="233">
            <path d="M0.5 0.5H232.5" id="axis-x" stroke="#69737D" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-28.11px] left-[47.25px] top-[64px] w-[2px]" data-name="axis-y">
        <div className="absolute bottom-[-0.26%] left-1/4 right-1/4 top-[-0.26%]">
          <svg className="block size-full" fill="none" height="194" preserveAspectRatio="none" viewBox="0 0 1 194" width="1">
            <path d="M0.5 0.5V193.5" id="axis-y" stroke="#69737D" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame1 />
      <div className="absolute inset-[42.38%_48.95%_-11.84%_8.97%]" data-name="Line">
        <div className="absolute inset-[-0.94%_-0.65%]">
          <svg className="block size-full" fill="none" height="162" preserveAspectRatio="none" viewBox="0 0 234 162" width="234">
            <path d={svgPaths.pdd75600} id="Line" stroke="url(#paint0_linear_0_585)" strokeLinecap="round" strokeWidth="3" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_585" x1="2681.39" x2="331.593" y1="86.3475" y2="1050.25">
                <stop stopColor="#5073B8" />
                <stop offset="0.166952" stopColor="#6DC175" />
                <stop offset="1" stopColor="#6EC2AE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-black h-[192.82px] left-[70px] mix-blend-saturation top-[58px] w-[447.75px]" data-name="Grayscale filter" />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute h-[228.892px] left-[754px] rounded-bl-[40px] rounded-br-[48px] top-[254px] w-[549px]" data-name="Content">
      <Top1 />
      <Group15 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[754px] top-[254px]">
      <Content1 />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[808px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[855px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[903px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        4
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[951px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[995px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        6
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[1038px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        7
      </p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[731px] top-[254px]">
      <div className="absolute bg-[#d9d9d9] h-[294px] left-[731px] rounded-[15px] top-[258px] w-[332px]" />
      <Group14 />
    </div>
  );
}

function Top2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[30px] top-[24px] w-[474px]" data-name="Top">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] not-italic relative shrink-0 text-[#21272a] text-[16px] whitespace-nowrap">Davies-Bouldin index per K</p>
    </div>
  );
}

function HorizontalRulles2() {
  return (
    <div className="absolute inset-[0_0_0.59%_2px] overflow-clip" data-name="horizontal rulles">
      <div className="absolute inset-[82.69%_0_16.72%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 h-[2px] left-0 right-0" data-name="hr">
        <div className="absolute bottom-1/4 left-[-0.21%] right-[-0.21%] top-1/4">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[2px] left-0 right-0 top-0" data-name="hr">
        <div className="absolute bottom-1/4 left-[-0.21%] right-[-0.21%] top-1/4">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.42%_0_82.99%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.84%_0_66.57%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.55%_0_49.85%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[65.97%_0_33.43%_0]" data-name="hr">
        <div className="absolute inset-[6.92%_-0.21%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 234 1" width="234">
            <path d="M0.5 0.5H233.5" id="hr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function VerticalRulles2() {
  return (
    <div className="absolute inset-[1px_-0.14%_3px_0.14%] overflow-clip" data-name="vertical rulles">
      <div className="absolute inset-[0.3%_4.81%_0_94.91%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_13.01%_0_86.71%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_21.21%_0_78.5%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_29.42%_0_70.3%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_37.62%_0_62.1%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_45.82%_0_53.89%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_54.03%_0_45.69%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_62.23%_0_37.49%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_70.44%_0_29.28%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_78.64%_0_21.08%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_86.84%_0_12.87%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.3%_95.05%_0_4.67%]" data-name="vr">
        <div className="absolute inset-[-0.26%_-25.11%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[0.3%] left-[0.02px] top-0 w-[2px]" data-name="vr">
        <div className="absolute bottom-[-0.26%] left-1/4 right-1/4 top-[-0.26%]">
          <svg className="block size-full" fill="none" height="192.423" preserveAspectRatio="none" viewBox="0 0 1 192.423" width="1">
            <path d="M0.5 0.5V191.923" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 right-[0.98px] top-px w-[2px]" data-name="vr">
        <div className="absolute bottom-[-0.26%] left-1/4 right-1/4 top-[-0.26%]">
          <svg className="block size-full" fill="none" height="192" preserveAspectRatio="none" viewBox="0 0 1 192" width="1">
            <path d="M0.5 0.5V191.5" id="vr" opacity="0.5" stroke="#69737D" strokeDasharray="2 5 2 5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function GridType2() {
  return (
    <div className="absolute inset-[61px_266.75px_-27.11px_47.25px] overflow-clip" data-name="Grid Type">
      <div className="absolute inset-[0.9%_0.14%_-1.19%_-0.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.666px_-1.746px] mask-size-[235px_195px] mix-blend-multiply" style={{ maskImage: `url("${imgGridType}")` }} data-name="Grid Type">
        <HorizontalRulles2 />
        <VerticalRulles2 />
      </div>
      <div className="absolute bg-black h-[241.719px] left-[-1.29px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.294px_-2.158px] mask-size-[235px_195px] mix-blend-saturation top-[2.16px] w-[457.647px]" style={{ maskImage: `url("${imgGridType}")` }} data-name="Grayscale filter" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Roboto:Medium',sans-serif] font-medium gap-[18px] h-[205px] items-end leading-[normal] left-[16.25px] text-[#69737d] text-[12px] text-right top-[58px] w-[22px] whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        1400
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        1200
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        1000
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        800
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        600
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        400
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        200
      </p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[16.25px] top-[58px]">
      <GridType2 />
      <div className="-translate-y-1/2 absolute h-0 left-[48px] right-[269px] top-[calc(50%+143.55px)]" data-name="axis-x">
        <div className="absolute inset-[-0.5px_-0.22%]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 233 1" width="233">
            <path d="M0.5 0.5H232.5" id="axis-x" stroke="#69737D" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-28.11px] left-[47.25px] top-[64px] w-[2px]" data-name="axis-y">
        <div className="absolute bottom-[-0.26%] left-1/4 right-1/4 top-[-0.26%]">
          <svg className="block size-full" fill="none" height="194" preserveAspectRatio="none" viewBox="0 0 1 194" width="1">
            <path d="M0.5 0.5V193.5" id="axis-y" stroke="#69737D" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame2 />
      <div className="absolute inset-[42.38%_48.95%_-11.84%_8.97%]" data-name="Line">
        <div className="absolute inset-[-0.94%_-0.65%]">
          <svg className="block size-full" fill="none" height="162" preserveAspectRatio="none" viewBox="0 0 234 162" width="234">
            <path d={svgPaths.pdd75600} id="Line" stroke="url(#paint0_linear_0_585)" strokeLinecap="round" strokeWidth="3" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_585" x1="2681.39" x2="331.593" y1="86.3475" y2="1050.25">
                <stop stopColor="#5073B8" />
                <stop offset="0.166952" stopColor="#6DC175" />
                <stop offset="1" stopColor="#6EC2AE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-black h-[192.82px] left-[70px] mix-blend-saturation top-[58px] w-[447.75px]" data-name="Grayscale filter" />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute h-[228.892px] left-[1105px] rounded-bl-[40px] rounded-br-[48px] top-[254px] w-[549px]" data-name="Content">
      <Top2 />
      <Group18 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[1105px] top-[254px]">
      <Content2 />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[1159px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[1206px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[1254px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        4
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[1302px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[1346px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        6
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium h-[11.653px] leading-[normal] left-[1389px] text-[#69737d] text-[12px] text-right top-[520.35px] w-[7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        7
      </p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[1082px] top-[254px]">
      <div className="absolute bg-[#d9d9d9] h-[294px] left-[1082px] rounded-[15px] top-[258px] w-[332px]" />
      <Group17 />
    </div>
  );
}

function Group1() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[normal] left-[409px] not-italic text-black top-[123px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[26.121px] left-[409px] opacity-70 text-[24px] top-[153px] w-[45.821px]">3</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] left-[409px] opacity-70 text-[14px] top-[123px] w-[77px]">K - Terpilih</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] left-[409px] opacity-70 text-[14px] top-[193px] w-[63px]">Cluster</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[925px] top-[193px]">
      <div className="absolute bg-[#bebebe] h-[21px] left-[925px] rounded-[15px] top-[193px] w-[198px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[normal] left-[935px] not-italic opacity-70 text-[14px] text-black top-[195px] w-[63px]">GOOD</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[1183px] top-[193px]">
      <div className="absolute bg-[#bebebe] h-[21px] left-[1183px] rounded-[15px] top-[193px] w-[198px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[normal] left-[1193px] not-italic opacity-70 text-[14px] text-black top-[195px] w-[63px]">GOOD</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[672px] top-[123px]">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[26px] leading-[normal] left-[672px] not-italic opacity-70 text-[24px] text-black top-[153px] w-[72px]">0,684</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[normal] left-[672px] not-italic opacity-70 text-[14px] text-black top-[123px] w-[110px]">Silhouette Score</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[normal] left-[682px] not-italic opacity-70 text-[14px] text-black top-[195px] w-[63px]">GOOD</p>
      <Group5 />
      <Group6 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[normal] left-[925px] not-italic text-black top-[123px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[26px] left-[925px] opacity-70 text-[24px] top-[153px] w-[83px]">0,421</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] left-[925px] opacity-70 text-[14px] top-[123px] w-[188px]">Davies-Bouldin index (DBI)</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[normal] left-[1183px] not-italic text-black top-[123px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[26px] left-[1183px] opacity-70 text-[24px] top-[153px] w-[90px]">182,45</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] left-[1183px] opacity-70 text-[14px] top-[123px] w-[178px]">Calinski-Harabasz Index</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[409px] top-[123px]">
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#eaeaea] border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[5px] relative rounded-tl-[10px] shrink-0 w-[121px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px] text-center">K</p>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#eaeaea] border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[5px] relative shrink-0 w-[172px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px] text-center">Silhouette Score</p>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[#eaeaea] border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[5px] relative shrink-0 w-[110px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px] text-center">DBI</p>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[#eaeaea] border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[5px] relative shrink-0 w-[231.5px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px] text-center">Calinski-Harabasz Index</p>
    </div>
  );
}

function TableHead() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-tl-[10px] shrink-0" data-name="Table Head">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[121px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">2</p>
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[172px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">0,612</p>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[110px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">0,542</p>
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[231.5px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">153,21</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Row 1">
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-[#f5f5f5] border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[121px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">3 Terpilih</p>
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-[#f5f5f5] border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[172px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">0,684</p>
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-[#f5f5f5] border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[110px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">0,421</p>
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-[#f5f5f5] border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[231.5px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">182,45</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Row 2">
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
    </div>
  );
}

function Cell12() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[121px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">4</p>
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[172px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">0,637</p>
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[110px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">0,489</p>
    </div>
  );
}

function Cell15() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[231.5px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">165,32</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Row 3">
      <Cell12 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
    </div>
  );
}

function Cell16() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[121px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">5</p>
    </div>
  );
}

function Cell17() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[172px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">0,689</p>
    </div>
  );
}

function Cell18() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[110px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">0,415</p>
    </div>
  );
}

function Cell19() {
  return (
    <div className="bg-white border-[#1a1a1a] border-b border-r border-solid content-stretch flex h-[36px] items-start overflow-clip p-[8px] relative shrink-0 w-[231.5px]" data-name="Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1a1a1a] text-[12px]">142,78</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Row 4">
      <Cell16 />
      <Cell17 />
      <Cell18 />
      <Cell19 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute border-[#1a1a1a] border-l border-solid border-t content-stretch flex flex-col h-[181px] items-start left-[404px] overflow-clip rounded-[10px] top-[636px]" data-name="Table">
      <TableHead />
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <div className="bg-black h-[181px] mix-blend-saturation relative shrink-0 w-[635.5px]" data-name="Grayscale filter" />
    </div>
  );
}

function Top3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13px] items-start justify-center left-[1135px] right-[-169px] top-[597px]" data-name="Top">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] not-italic relative shrink-0 text-[#21272a] text-[16px] whitespace-nowrap">Alasan Pemilihan K=3</p>
    </div>
  );
}

function Top4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[22px] right-[359px] top-[16px]" data-name="Top">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] not-italic relative shrink-0 text-[#21272a] text-[16px] whitespace-nowrap">Stabilitas Model</p>
    </div>
  );
}

function Hints() {
  return <div className="absolute h-[22px] left-[16px] right-[16px] top-[50px]" data-name="Hints" />;
}

function DashboardSection() {
  return (
    <div className="absolute h-[38px] left-[410px] top-[576px] w-[506px]" data-name="Dashboard Section">
      <Top4 />
      <Hints />
    </div>
  );
}

export default function ModalEvaluasi() {
  return (
    <div className="bg-white relative size-full" data-name="Modal Evaluasi">
      <div className="absolute bg-[#f9fbfd] h-[1024px] left-0 top-0 w-[82px]" data-name="Low-Fi Side menu">
        <div aria-hidden className="absolute border-[#d1d9e2] border-r border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-between pb-[32px] pt-[24px] px-[16px] relative size-full">
            <Container />
            <div className="relative rounded-[5px] shrink-0 size-[48px]" data-name=".Low-Fi Side menu section">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="bg-[#7c8b9d] relative rounded-[50px] shrink-0 size-[32px]" data-name="Low-Fi Avatar">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="relative shrink-0 size-[14px]" data-name="photo Fill">
                          <div className="absolute inset-[4.17%]" data-name="Icon">
                            <svg className="absolute block inset-0 size-full" fill="none" height="12.8333" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333" width="12.8333">
                              <g id="Icon">
                                <path d={svgPaths.p1e92000} fill="white" />
                                <path clipRule="evenodd" d={svgPaths.p3aee3c80} fill="white" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoFiUxSideMenuSection className="absolute bg-[#d1d9e2] left-[16px] rounded-[5px] size-[48px] top-[292px]" state="Current" type="Icon Only" />
      <div className="absolute bg-[#f9fbfd] h-[1024px] left-[82px] top-0 w-[280px]" data-name="Low-Fi Side menu">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-start py-[24px] relative size-full">
            <SideMenuHeader />
            <Sections />
            <WidgetsNav />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#d1d9e2] border-r border-solid inset-0 pointer-events-none" />
      </div>
      <LoFiUxSideMenuSection className="absolute bg-[#d1d9e2] h-[48px] left-[82px] top-[292px] w-[280px]" showTagNotification={false} showTrilingIcon={false} state="Current" />
      <ParagraphContainer2 />
      <div className="absolute bg-[#d9d9d9] h-[138px] left-[380px] rounded-[15px] top-[102px] w-[247px]" />
      <div className="absolute bg-[#d9d9d9] h-[265px] left-[380px] rounded-[15px] top-[573px] w-[683px]" />
      <div className="absolute bg-[#d9d9d9] h-[138px] left-[643px] rounded-[15px] top-[102px] w-[247px]" />
      <Group9 />
      <Group13 />
      <Group16 />
      <div className="absolute bg-[#d9d9d9] h-[138px] left-[904px] rounded-[15px] top-[102px] w-[247px]" />
      <div className="absolute bg-[#d9d9d9] h-[138px] left-[1167px] rounded-[15px] top-[102px] w-[247px]" />
      <div className="absolute bg-[#bebebe] h-[21px] left-[672px] rounded-[15px] top-[193px] w-[198px]" />
      <Group />
      <Table />
      <div className="absolute bg-[#d9d9d9] h-[265px] left-[1082px] rounded-[15px] top-[573px] w-[332px]" />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[177px] leading-[0] left-[1115px] not-italic overflow-hidden text-[#0f172a] text-[12px] text-ellipsis text-justify top-[645px] w-[274px]">
        <p className="leading-[normal] mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="leading-[normal]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
      </div>
      <Top3 />
      <DashboardSection />
    </div>
  );
}