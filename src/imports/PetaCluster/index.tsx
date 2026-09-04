import svgPaths from "./svg-6gkqka4n77";
import imgIcons8FullScreen1001 from "./57cfdb86c51a5366db8af78f21e1875bac6100c4.png";

function ControlsZoomControls({ className }: { className?: string }) {
  return (
    <div className={className || "h-[70px] relative rounded-tl-[15px] rounded-tr-[15px] w-[37px]"} data-name="Controls / Zoom Controls">
      <div className="absolute bg-[#878d96] inset-0 rounded-tl-[6px] rounded-tr-[6px]" data-name="Rectangle" />
      <div className="absolute inset-[15.09%_32.14%_66.04%_32.14%]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.208" preserveAspectRatio="none" viewBox="0 0 13.2139 13.208" width="13.2139">
          <path d={svgPaths.p3fc6a600} fill="white" id="Union" />
        </svg>
      </div>
      <div className="absolute inset-[73.58%_32.14%_22.64%_32.14%]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" height="2.6416" preserveAspectRatio="none" viewBox="0 0 13.2139 2.6416" width="13.2139">
          <path d={svgPaths.p11138b0} fill="white" id="Union" />
        </svg>
      </div>
      <div className="absolute bg-[rgba(230,230,230,0.5)] inset-[49.06%_14.29%]" />
    </div>
  );
}
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
            <g id="Lookscout">
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
      <div className="bg-[#d1d9e2] relative rounded-[5px] shrink-0 size-[48px]" data-name=".Low-Fi Side menu section">
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
            <div className="absolute inset-[12.5%_17.51%]" data-name="Logo">
              <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 83.1648 24" width="83.1648">
                <g id="Logo">
                  <path d={svgPaths.p6ab0300} fill="#5F6D7E" />
                  <path d={svgPaths.p3dda2600} fill="#5F6D7E" />
                  <path d={svgPaths.p3999ab80} fill="#5F6D7E" />
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
      <div className="absolute bg-[#7c8b9d] inset-[0_15.08%_0_0] rounded-[50px]" data-name="Text" />
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
      <div className="bg-[#d1d9e2] h-[48px] relative shrink-0 w-full" data-name=".Low-Fi Side menu section">
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
            <div className="absolute bg-[#7c8b9d] bottom-0 left-0 top-0 w-[3px]" />
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

function Group() {
  return (
    <div className="absolute contents left-[1012px] top-[54px]">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1012px] not-italic opacity-70 text-[#030229] text-[14px] top-[54px] whitespace-nowrap">2024 - 2026</p>
      <div className="absolute inset-[5.96%_23.06%_93.65%_76.39%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-6.25%]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 9 5" width="9">
            <path d="M0.5 0.5L4.5 4.5L8.5 0.5" id="Vector" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EndingDate() {
  return (
    <div className="absolute contents left-[995px] top-[43px]" data-name="Ending date">
      <div className="absolute bg-[#d9d9d9] h-[40px] left-[995px] rounded-[15px] top-[43px] w-[130px]" />
      <Group />
    </div>
  );
}

function Date() {
  return (
    <div className="absolute contents left-[995px] top-[43px]" data-name="Date">
      <EndingDate />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[1159px] top-[54px]">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1159px] not-italic opacity-70 text-[#030229] text-[14px] top-[54px] whitespace-nowrap">Komoditas</p>
      <div className="absolute inset-[5.96%_12.85%_93.65%_86.6%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-6.25%]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 9 5" width="9">
            <path d="M0.5 0.5L4.5 4.5L8.5 0.5" id="Vector" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EndingDate1() {
  return (
    <div className="absolute contents left-[1142px] top-[43px]" data-name="Ending date">
      <div className="absolute bg-[#d9d9d9] h-[40px] left-[1142px] rounded-[15px] top-[43px] w-[130px]" />
      <Group1 />
    </div>
  );
}

function Date1() {
  return (
    <div className="absolute contents left-[1142px] top-[43px]" data-name="Date">
      <EndingDate1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[1317px] top-[54px]">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1317px] not-italic opacity-70 text-[#030229] text-[14px] top-[54px] whitespace-nowrap">Reset Filter</p>
    </div>
  );
}

function EndingDate2() {
  return (
    <div className="absolute contents left-[1289px] top-[43px]" data-name="Ending date">
      <div className="absolute bg-[#d9d9d9] h-[40px] left-[1289px] rounded-[15px] top-[43px] w-[130px]" />
      <Group2 />
    </div>
  );
}

function Date2() {
  return (
    <div className="absolute contents left-[1289px] top-[43px]" data-name="Date">
      <EndingDate2 />
    </div>
  );
}

function G() {
  return (
    <div className="absolute inset-[51.87%_19.44%_45.8%_79.31%]" data-name="g60">
      <div className="absolute inset-[-26.08%_-46.94%_-28.13%_-46.94%]">
        <svg className="block size-full" fill="none" height="2.95647" preserveAspectRatio="none" viewBox="0 0 2.0651 2.95647" width="2.0651">
          <g id="g60">
            <path d={svgPaths.p26ee4b70} fill="#A2A9B0" id="path62" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G1() {
  return (
    <div className="absolute inset-[48.25%_18.5%_49.82%_80.41%]" data-name="g64">
      <div className="absolute inset-[-31.51%_-55.28%_-31.51%_-53.65%]">
        <svg className="block size-full" fill="none" height="2.58662" preserveAspectRatio="none" viewBox="0 0 1.94702 2.58662" width="1.94702">
          <g id="g64">
            <path d={svgPaths.p1b60f080} fill="#A2A9B0" id="path66" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G2() {
  return (
    <div className="absolute inset-[61.2%_23.51%_37.59%_74.06%]" data-name="g68">
      <div className="absolute inset-[-51.97%_-48.19%_-60.51%_-31.54%]">
        <svg className="block size-full" fill="none" height="2.10707" preserveAspectRatio="none" viewBox="0 0 3.70894 2.10707" width="3.70894">
          <g id="g68">
            <path d={svgPaths.p3c060700} fill="#A2A9B0" id="path70" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G4() {
  return (
    <div className="absolute inset-[76.09%_1.25%_19.41%_90.67%]" data-name="g340">
      <div className="absolute inset-[-13.51%_-8.16%_-13.51%_-7.29%]">
        <svg className="block size-full" fill="none" height="4.70213" preserveAspectRatio="none" viewBox="0 0 7.91612 4.70213" width="7.91612">
          <g id="g340">
            <path d={svgPaths.p17cad900} fill="#A2A9B0" id="path342" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G5() {
  return (
    <div className="absolute inset-[50.58%_13.64%_44.11%_81.97%]" data-name="g412">
      <div className="absolute inset-[-11.77%_-13.49%_-11.46%_-13.41%]">
        <svg className="block size-full" fill="none" height="5.37684" preserveAspectRatio="none" viewBox="0 0 4.73065 5.37684" width="4.73065">
          <g id="g412">
            <path d={svgPaths.p3b4ef580} fill="#A2A9B0" id="path414" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G6() {
  return (
    <div className="absolute inset-[37.95%_16.77%_52.88%_68.42%]" data-name="g416">
      <div className="absolute inset-[-6.86%_-4.52%_-7.05%_-4.3%]">
        <svg className="block size-full" fill="none" height="8.58522" preserveAspectRatio="none" viewBox="0 0 13.6914 8.58522" width="13.6914">
          <g id="g416">
            <path d={svgPaths.p2e524580} fill="#A2A9B0" id="path418" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G7() {
  return (
    <div className="absolute inset-[38.92%_20.06%_49.1%_62.54%]" data-name="g420">
      <div className="absolute inset-[-5.16%_-5.15%_-5.08%_-3.38%]">
        <svg className="block size-full" fill="none" height="10.8583" preserveAspectRatio="none" viewBox="0 0 16.038 10.8583" width="16.038">
          <g id="g420">
            <path d={svgPaths.p274f9400} fill="#A2A9B0" id="path422" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G8() {
  return (
    <div className="absolute inset-[25.4%_34.64%_64.86%_51.88%]" data-name="g424">
      <div className="absolute inset-[-6.4%_-4.37%_-6.73%_-4.49%]">
        <svg className="block size-full" fill="none" height="9.04936" preserveAspectRatio="none" viewBox="0 0 12.4635 9.04936" width="12.4635">
          <g id="g424">
            <path d={svgPaths.p1660500} fill="#A2A9B0" id="path426" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G9() {
  return (
    <div className="absolute inset-[31.27%_35.34%_55.29%_57.13%]" data-name="g428">
      <div className="absolute inset-[-4.53%_-8.01%_-5.05%_-8.01%]">
        <svg className="block size-full" fill="none" height="12.0981" preserveAspectRatio="none" viewBox="0 0 7.41424 12.0981" width="7.41424">
          <g id="g428">
            <path d={svgPaths.p1710ac00} fill="#A2A9B0" id="path430" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G10() {
  return (
    <div className="absolute inset-[11.56%_54.15%_76.93%_35.58%]" data-name="g432">
      <div className="absolute inset-[-5.81%_-6%_-5.29%_-5.79%]">
        <svg className="block size-full" fill="none" height="10.5029" preserveAspectRatio="none" viewBox="0 0 9.74828 10.5029" width="9.74828">
          <g id="g432">
            <path d={svgPaths.p4bb61c0} fill="#A2A9B0" id="path434" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G3() {
  return (
    <div className="absolute inset-[91.11%_45.75%_5.14%_50.77%]" data-name="g312">
      <div className="absolute inset-[-31.73%_-27.82%_-33.12%_-30.23%]">
        <svg className="block size-full" fill="none" height="3.05129" preserveAspectRatio="none" viewBox="0 0 2.84066 3.05129" width="2.84066">
          <g id="g312">
            <path d={svgPaths.p1f4b6900} fill="#878D96" id="path314" stroke="white" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Provinces() {
  return (
    <div className="absolute contents inset-[21.51%_1.35%_41.5%_26.32%]" data-name="Provinces">
      <div className="absolute h-[14.478px] left-[719.82px] top-[523.31px] w-[17.973px]" data-name="Yogyakarta">
        <div className="absolute inset-[-6.36%_-3.28%_-4.45%_-3.04%]">
          <svg className="block size-full" fill="none" height="16.0431" preserveAspectRatio="none" viewBox="0 0 19.1077 16.0431" width="19.1077">
            <path d={svgPaths.p284b6600} fill="#878D96" id="YO" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.06%_65.11%_64.22%_29.55%]" data-name="Sumatera Utara">
        <div className="absolute inset-[0_0_17.04%_21.04%]" data-name="SU">
          <div className="absolute inset-[-0.55%_-0.84%_-0.61%_-0.82%]">
            <svg className="block size-full" fill="none" height="92.1538" preserveAspectRatio="none" viewBox="0 0 61.7157 92.1538" width="61.7157">
              <path d={svgPaths.p2471fb00} fill="#A2A9B0" id="SU" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[53.04%_54.72%_45.33%_40.09%]" data-name="path274">
          <div className="absolute inset-[-29.35%_-20.08%_-28.01%_-13.41%]">
            <svg className="block size-full" fill="none" height="2.8089" preserveAspectRatio="none" viewBox="0 0 5.33171 2.8089" width="5.33171">
              <path d={svgPaths.p36ad4700} fill="#A2A9B0" id="path274" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.9%_55.67%_4.03%_36.36%]" data-name="path278">
          <div className="absolute inset-[-5.88%_-8.88%_-5.64%_-13.38%]">
            <svg className="block size-full" fill="none" height="9.87989" preserveAspectRatio="none" viewBox="0 0 7.48764 9.87989" width="7.48764">
              <path d={svgPaths.p2a080340} fill="#A2A9B0" id="path278" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[93.02%_57.32%_0_35.58%]" data-name="path282">
          <div className="absolute inset-[-7.21%_-9.16%_-8.52%_-35.85%]">
            <svg className="block size-full" fill="none" height="8.87515" preserveAspectRatio="none" viewBox="0 0 7.91517 8.87515" width="7.91517">
              <g id="path282">
                <path d={svgPaths.p8ccadb0} fill="#A2A9B0" />
                <path d={svgPaths.p30343900} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[56.41%_74.46%_23.3%_0]" data-name="path310">
          <div className="absolute inset-[-2.87%_-2.57%_-2.24%_-2.71%]">
            <svg className="block size-full" fill="none" height="23.419" preserveAspectRatio="none" viewBox="0 0 20.6728 23.419" width="20.6728">
              <path d={svgPaths.p30f94ac0} fill="#A2A9B0" id="path310" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[31.53%_28.23%_57.52%_64.84%]" data-name="Sulawesi Tengah">
        <div className="absolute inset-[5.37%_79.12%_93.4%_20.01%]" data-name="path138">
          <div className="absolute inset-[-41.38%_-57.79%_-36.02%_-57.79%]">
            <svg className="block size-full" fill="none" height="2.46273" preserveAspectRatio="none" viewBox="0 0 1.86525 2.46273" width="1.86525">
              <path d={svgPaths.p1501b880} fill="#878D96" id="path138" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.42%_72.98%_93.93%_25.35%]" data-name="path142">
          <div className="absolute inset-[-68.76%_-72.89%_-68.76%_-9.44%]">
            <svg className="block size-full" fill="none" height="1.72721" preserveAspectRatio="none" viewBox="0 0 3.03427 1.72721" width="3.03427">
              <path d={svgPaths.p36673100} fill="#878D96" id="path142" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.27%_3.4%_33.61%_95.73%]" data-name="path146">
          <div className="absolute inset-[-52.41%_-57.78%_-58.47%_-59.3%]">
            <svg className="block size-full" fill="none" height="2.6487" preserveAspectRatio="none" viewBox="0 0 1.87844 2.6487" width="1.87844">
              <path d={svgPaths.p38f3bb40} fill="#878D96" id="path146" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.33%_5.27%_33.43%_94.4%]" data-name="path150">
          <div className="absolute inset-[-36.02%_-150.23%]">
            <svg className="block size-full" fill="none" height="2.38829" preserveAspectRatio="none" viewBox="0 0 1.33283 2.38829" width="1.33283">
              <path d={svgPaths.p2329eb00} fill="#878D96" id="path150" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[67.39%_0_31.37%_98.8%]" data-name="path154">
          <div className="absolute inset-[-42.3%_-43.04%_-46.37%_-48.79%]">
            <svg className="block size-full" fill="none" height="2.61932" preserveAspectRatio="none" viewBox="0 0 2.29823 2.61932" width="2.29823">
              <path d={svgPaths.p22762480} fill="#878D96" id="path154" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[35.14%_45.1%_61.73%_48.77%]" data-name="path666">
          <div className="absolute inset-[-23.54%_-8.73%_-15.23%_-8.16%]">
            <svg className="block size-full" fill="none" height="4.86219" preserveAspectRatio="none" viewBox="0 0 7.1587 4.86219" width="7.1587">
              <path d={svgPaths.p17764180} fill="#878D96" id="path666" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.43%_41.69%_64.62%_53.97%]" data-name="path670">
          <div className="absolute inset-[-23.65%_-11.56%_-22.92%_-11.56%]">
            <svg className="block size-full" fill="none" height="3.19757" preserveAspectRatio="none" viewBox="0 0 5.32669 3.19757" width="5.32669">
              <g id="path670">
                <path d={svgPaths.p3e2faec8} fill="#878D96" />
                <path d={svgPaths.p3e2faec8} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.6%_50.9%_68.81%_47.23%]" data-name="path674">
          <div className="absolute inset-[-28.01%_-29%_-29.34%_-29.21%]">
            <svg className="block size-full" fill="none" height="2.80859" preserveAspectRatio="none" viewBox="0 0 2.94884 2.80859" width="2.94884">
              <path d={svgPaths.p37561900} fill="#878D96" id="path674" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[30.96%_34.22%_65.92%_62.31%]" data-name="path678">
          <div className="absolute inset-[-17.02%_-19.13%_-20.8%_-15.04%]">
            <svg className="block size-full" fill="none" height="4.82898" preserveAspectRatio="none" viewBox="0 0 4.64422 4.82898" width="4.64422">
              <path d={svgPaths.pc568f00} fill="#878D96" id="path678" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[31.13%_37.56%_67.28%_60.31%]" data-name="path682">
          <div className="absolute inset-[-34.63%_-23.47%_-29.51%_-25.43%]">
            <svg className="block size-full" fill="none" height="2.92973" preserveAspectRatio="none" viewBox="0 0 3.17173 2.92973" width="3.17173">
              <path d={svgPaths.p39086500} fill="#878D96" id="path682" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.26%_16.68%_34.67%_81.39%]" data-name="path686">
          <div className="absolute inset-[-15.77%_-27.07%_-14.54%_-26.15%]">
            <svg className="block size-full" fill="none" height="4.47992" preserveAspectRatio="none" viewBox="0 0 2.95793 4.47992" width="2.95793">
              <path d={svgPaths.p3a4639c0} fill="#878D96" id="path686" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[50.06%_7.61%_40.09%_75.38%]" data-name="path690">
          <div className="absolute inset-[-5.04%_-2.98%_-5.17%_-2.97%]">
            <svg className="block size-full" fill="none" height="12.1678" preserveAspectRatio="none" viewBox="0 0 17.9841 12.1678" width="17.9841">
              <path d={svgPaths.p2f00f00} fill="#878D96" id="path690" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.74%_0.53%_32.67%_97.26%]" data-name="path694">
          <div className="absolute inset-[-27.32%_-16.04%_-17.19%_-22.76%]">
            <svg className="block size-full" fill="none" height="4.20355" preserveAspectRatio="none" viewBox="0 0 3.04904 4.20355" width="3.04904">
              <g id="path694">
                <path d={svgPaths.p9d21700} fill="#878D96" />
                <path d={svgPaths.p9d21700} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[98.17%_16.08%_0_81.12%]" data-name="path710">
          <div className="absolute inset-[-27.44%_-17.88%_-28.88%_-17.88%]">
            <svg className="block size-full" fill="none" height="3.20355" preserveAspectRatio="none" viewBox="0 0 3.79592 3.20355" width="3.79592">
              <g id="path710">
                <path d={svgPaths.p38d77e00} fill="#878D96" />
                <path d={svgPaths.p38d77e00} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[32.49%_39.76%_64.62%_58.44%]" data-name="path930">
          <div className="absolute inset-[-18.21%_-27.82%_-25.78%_-27.82%]">
            <svg className="block size-full" fill="none" height="4.66411" preserveAspectRatio="none" viewBox="0 0 2.7973 4.66411" width="2.7973">
              <path d={svgPaths.p1b6b5dc0} fill="#878D96" id="path930" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[60.67%_11.61%_36.97%_85.86%]" data-name="path934">
          <div className="absolute inset-[-18.91%_-19.77%_-18.91%_-21.53%]">
            <svg className="block size-full" fill="none" height="3.64432" preserveAspectRatio="none" viewBox="0 0 3.57403 3.64432" width="3.57403">
              <path d={svgPaths.p3c8a9e80} fill="#878D96" id="path934" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[56.9%_6.27%_38.33%_90.46%]" data-name="path1022">
          <div className="absolute inset-[-9.34%_-15.33%]">
            <svg className="block size-full" fill="none" height="6.35477" preserveAspectRatio="none" viewBox="0 0 4.2617 6.35477" width="4.2617">
              <path d={svgPaths.p9e462f0} fill="#878D96" id="path1022" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_10.07%_8.02%_0]" data-name="path1198 2">
          <div className="absolute inset-[-1.2%_-0.62%_-0.53%_-0.56%]">
            <svg className="block size-full" fill="none" height="104.91" preserveAspectRatio="none" viewBox="0 0 90.7868 104.91" width="90.7868">
              <path d={svgPaths.p3c43d780} fill="#878D96" id="path1198 2" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[73.381px] left-[538.56px] top-[391.1px] w-[91.262px]" data-name="Sumatera Selatan">
        <div className="absolute inset-[-0.68%_-0.56%_-0.69%_-0.73%]">
          <svg className="block size-full" fill="none" height="74.3861" preserveAspectRatio="none" viewBox="0 0 92.4458 74.3861" width="92.4458">
            <path d={svgPaths.p35b35e00} fill="#A2A9B0" id="SS" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[62.208px] left-[917.12px] top-[372.12px] w-[25.628px]" data-name="Sulawesi Barat">
        <div className="absolute inset-[-1.11%_-2.93%_-0.89%_-1.99%]">
          <svg className="block size-full" fill="none" height="63.4569" preserveAspectRatio="none" viewBox="0 0 26.8892 63.4569" width="26.8892">
            <path d={svgPaths.p1f2baf80} fill="#C1C7CD" id="Sulawesi Barat" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[38.53%_31.47%_49.21%_64.6%]" data-name="Sulawesi Selatan">
        <div className="absolute inset-[97.21%_30.63%_1.37%_58.33%]" data-name="path130">
          <div className="absolute inset-[-28.01%_-9.99%_-28.72%_-7.99%]">
            <svg className="block size-full" fill="none" height="2.79749" preserveAspectRatio="none" viewBox="0 0 7.38241 2.79749" width="7.38241">
              <g id="path130">
                <path d={svgPaths.p3834e748} fill="#A2A9B0" />
                <path d={svgPaths.p3834e748} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[92.73%_41.9%_4.95%_51.76%]" data-name="path134">
          <div className="absolute inset-[-17.19%_-13.91%_-19.18%_-13.91%]">
            <svg className="block size-full" fill="none" height="3.96669" preserveAspectRatio="none" viewBox="0 0 4.5946 3.96669" width="4.5946">
              <path d={svgPaths.p28d07e00} fill="#A2A9B0" id="path134" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.41%_50.94%_16.75%_43.78%]" data-name="path634">
          <div className="absolute inset-[-3.27%_-16.69%_-4.04%_-17.38%]">
            <svg className="block size-full" fill="none" height="17.3093" preserveAspectRatio="none" viewBox="0 0 4.01604 17.3093" width="4.01604">
              <path d={svgPaths.p8873500} fill="#A2A9B0" id="path634" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[98.53%_0_0_96.6%]" data-name="path926">
          <div className="absolute inset-[-30.17%_-26.81%_-27.01%_-25.9%]">
            <svg className="block size-full" fill="none" height="2.90947" preserveAspectRatio="none" viewBox="0 0 2.94801 2.90947" width="2.94801">
              <path d={svgPaths.p1c52aa00} fill="#A2A9B0" id="path926" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_1.76%_30.17%_0]" data-name="path1202 2">
          <div className="absolute inset-[-0.59%_-0.9%_-0.57%_-0.92%]">
            <svg className="block size-full" fill="none" height="88.6759" preserveAspectRatio="none" viewBox="0 0 56.7269 88.6759" width="56.7269">
              <path d={svgPaths.p2972f500} fill="#A2A9B0" id="path1202 2" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[40.75%_27.95%_52.25%_67%]" data-name="Sulawesi Tenggara">
        <div className="absolute inset-[82.66%_7.97%_13.56%_88.19%]" data-name="path170">
          <div className="absolute inset-[-18.45%_-27.2%_-22.07%_-30.92%]">
            <svg className="block size-full" fill="none" height="3.80865" preserveAspectRatio="none" viewBox="0 0 4.4207 3.80865" width="4.4207">
              <path d={svgPaths.p10233000} fill="#C1C7CD" id="path170" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[75.46%_13.55%_20.57%_82.69%]" data-name="path174">
          <div className="absolute inset-[-17.74%_-18.5%_-17.59%_-20.18%]">
            <svg className="block size-full" fill="none" height="3.84704" preserveAspectRatio="none" viewBox="0 0 3.78494 3.84704" width="3.78494">
              <path d={svgPaths.pc868880} fill="#C1C7CD" id="path174" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[95.02%_0_0_96.7%]" data-name="path178">
          <div className="absolute inset-[-39.89%_-21.16%_-14.99%_-21.05%]">
            <svg className="block size-full" fill="none" height="5.52885" preserveAspectRatio="none" viewBox="0 0 3.40792 5.52885" width="3.40792">
              <path d={svgPaths.p31f64280} fill="#C1C7CD" id="path178" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[35.52%_25.46%_56.18%_65.02%]" data-name="path714">
          <div className="absolute inset-[-8.81%_-7.22%_-8.54%_-9.12%]">
            <svg className="block size-full" fill="none" height="6.98215" preserveAspectRatio="none" viewBox="0 0 8.05406 6.98215" width="8.05406">
              <path d={svgPaths.p240bf800} fill="#C1C7CD" id="path714" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[69.46%_62.55%_17.44%_29.3%]" data-name="path718">
          <div className="absolute inset-[-11.36%_-8.44%_-5.33%_-10.17%]">
            <svg className="block size-full" fill="none" height="10.9537" preserveAspectRatio="none" viewBox="0 0 7.02683 10.9537" width="7.02683">
              <path d={svgPaths.p949ac80} fill="#C1C7CD" id="path718" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[55.63%_40.2%_18.63%_44.32%]" data-name="path722">
          <div className="absolute inset-[-2.77%_-4.51%_-3.09%_-5.72%]">
            <svg className="block size-full" fill="none" height="19.5266" preserveAspectRatio="none" viewBox="0 0 12.4003 19.5266" width="12.4003">
              <path d={svgPaths.p2566ba00} fill="#C1C7CD" id="path722" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[48.16%_26.56%_10.52%_52.66%]" data-name="path726">
          <div className="absolute inset-[-1.69%_-3.32%_-1.78%_-4.04%]">
            <svg className="block size-full" fill="none" height="30.6429" preserveAspectRatio="none" viewBox="0 0 16.2236 30.6429" width="16.2236">
              <path d={svgPaths.p6967c00} fill="#C1C7CD" id="path726" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[79.89%] left-[47.99%] right-1/2 top-[16.97%]" data-name="path162">
          <div className="absolute inset-[-22.24%_-34.14%_-24.12%_-34.14%]">
            <svg className="block size-full" fill="none" height="3.28996" preserveAspectRatio="none" viewBox="0 0 2.4644 3.28996" width="2.4644">
              <path d={svgPaths.p245f4800} fill="#C1C7CD" id="path162" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[20.94%_53.3%_76.75%_44.41%]" data-name="path166">
          <div className="absolute inset-[-35.65%_-36.7%_-52.75%_-30.95%]">
            <svg className="block size-full" fill="none" height="3.11371" preserveAspectRatio="none" viewBox="0 0 2.78988 3.11371" width="2.78988">
              <path d={svgPaths.p379d9000} fill="#C1C7CD" id="path166" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_35.71%_36.72%_0]" data-name="path1202 1">
          <div className="absolute inset-[-1.1%_-1.07%]">
            <svg className="block size-full" fill="none" height="46.3506" preserveAspectRatio="none" viewBox="0 0 47.7295 46.3506" width="47.7295">
              <path d={svgPaths.p1e928c00} fill="#C1C7CD" id="path1202 1" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[32.54%_62.93%_58.17%_31.96%]" data-name="Sumatera Barat">
        <div className="absolute inset-[0_0_20.29%_16.3%]" data-name="Sumbar">
          <div className="absolute inset-[-0.66%_-0.9%_-0.95%_-3.06%]">
            <svg className="block size-full" fill="none" height="77.0474" preserveAspectRatio="none" viewBox="0 0 63.9443 77.0474" width="63.9443">
              <path d={svgPaths.p17b2c580} fill="#A2A9B0" id="Sumbar" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[42.67%_78.71%_36.28%_0]" data-name="path286">
          <div className="absolute inset-[-2.5%_-3.24%_-2.64%_-3.33%]">
            <svg className="block size-full" fill="none" height="21.0588" preserveAspectRatio="none" viewBox="0 0 16.6699 21.0588" width="16.6699">
              <path d={svgPaths.p13640540} fill="#A2A9B0" id="path286" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[68.73%_61.05%_22.79%_28.8%]" data-name="path290">
          <div className="absolute inset-[-6.31%_-6.71%_-6.2%_-6.92%]">
            <svg className="block size-full" fill="none" height="9.07424" preserveAspectRatio="none" viewBox="0 0 8.47102 9.07424" width="8.47102">
              <path d={svgPaths.p7c2c700} fill="#A2A9B0" id="path290" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[79.85%_50.09%_11.61%_41.94%]" data-name="path294">
          <div className="absolute inset-[-7.28%_-8.75%_-7.72%_-9.27%]">
            <svg className="block size-full" fill="none" height="9.35118" preserveAspectRatio="none" viewBox="0 0 6.91315 9.35118" width="6.91315">
              <path d={svgPaths.p336baa80} fill="#A2A9B0" id="path294" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[86.66%_41.76%_0_48.91%]" data-name="path298">
          <div className="absolute inset-[-4.57%_-8.37%_-5.55%_-7.29%]">
            <svg className="block size-full" fill="none" height="13.9774" preserveAspectRatio="none" viewBox="0 0 7.93024 13.9774" width="7.93024">
              <path d={svgPaths.p2590eb80} fill="#A2A9B0" id="path298" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[94.93%_40.22%_3.68%_58.42%]" data-name="path302">
          <div className="absolute inset-[-90.85%_-87.65%_-38.69%_-50.08%]">
            <svg className="block size-full" fill="none" height="3.03491" preserveAspectRatio="none" viewBox="0 0 2.37367 3.03491" width="2.37367">
              <path d={svgPaths.p1bc03900} fill="#A2A9B0" id="path302" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[22.28%_23.11%_66.08%_70.51%]" data-name="Sulawesi Utara">
        <div className="absolute inset-[75.65%_45.62%_21.24%_51.27%]" data-name="path638">
          <div className="absolute inset-[-5.52%_-17.33%_-14.13%_-19.37%]">
            <svg className="block size-full" fill="none" height="4.42954" preserveAspectRatio="none" viewBox="0 0 3.91291 4.42954" width="3.91291">
              <path d={svgPaths.p25453000} fill="#A2A9B0" id="path638" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[59.84%_41.64%_38.77%_56.19%]" data-name="path642">
          <div className="absolute inset-[-30.25%_-25.75%_-32.04%_-25.04%]">
            <svg className="block size-full" fill="none" height="2.68219" preserveAspectRatio="none" viewBox="0 0 3.01128 2.68219" width="3.01128">
              <path d={svgPaths.p216b300} fill="#A2A9B0" id="path642" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[51.91%_41.85%_44.65%_55.9%]" data-name="path646">
          <div className="absolute inset-[-12.2%_-24.23%_-12.78%_-24.84%]">
            <svg className="block size-full" fill="none" height="5.1227" preserveAspectRatio="none" viewBox="0 0 3.07612 5.1227" width="3.07612">
              <path d={svgPaths.p2c83380} fill="#A2A9B0" id="path646" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[34.44%_36.71%_59.18%_57.35%]" data-name="path650">
          <div className="absolute inset-[-6.8%_-9.16%_-6.79%_-9.16%]">
            <svg className="block size-full" fill="none" height="8.63594" preserveAspectRatio="none" viewBox="0 0 6.45833 8.63594" width="6.45833">
              <path d={svgPaths.p212c0500} fill="#A2A9B0" id="path650" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[31.95%_6.73%_65.95%_90.8%]" data-name="path654">
          <div className="absolute inset-[-24.06%_-26.91%_-20.58%_-23.94%]">
            <svg className="block size-full" fill="none" height="3.63348" preserveAspectRatio="none" viewBox="0 0 3.41365 3.63348" width="3.41365">
              <path d={svgPaths.p130c9180} fill="#A2A9B0" id="path654" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[28.67%_10.14%_67.33%_87.26%]" data-name="path658">
          <div className="absolute inset-[-10.5%_-22.47%_-22.27%_-25.49%]">
            <svg className="block size-full" fill="none" height="6.3198" preserveAspectRatio="none" viewBox="0 0 3.54558 6.3198" width="3.54558">
              <path d={svgPaths.p27bfc00} fill="#A2A9B0" id="path658" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[19.02%_5.5%_70.77%_88.7%]" data-name="path662">
          <div className="absolute inset-[-4.11%_-9.88%_-4.11%_-9.67%]">
            <svg className="block size-full" fill="none" height="13.164" preserveAspectRatio="none" viewBox="0 0 6.36645 13.164" width="6.36645">
              <path d={svgPaths.p3b6b200} fill="#A2A9B0" id="path662" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_13.47%_99.72%_86.24%]" data-name="path958">
          <div className="absolute inset-[-151.27%_-187.74%_-213.17%_-295.92%]">
            <svg className="block size-full" fill="none" height="1.53515" preserveAspectRatio="none" viewBox="0 0 1.55442 1.53515" width="1.55442">
              <path d={svgPaths.p885e7b8} fill="#A2A9B0" id="path958" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.84%_42.87%_34.05%_55.39%]" data-name="path962">
          <div className="absolute inset-[-61.49%_-32.33%_-43.2%_-31.3%]">
            <svg className="block size-full" fill="none" height="2.70643" preserveAspectRatio="none" viewBox="0 0 2.61411 2.70643" width="2.61411">
              <path d={svgPaths.p16e07600} fill="#A2A9B0" id="path962" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.38%_48.73%_27.9%_50.04%]" data-name="path1010">
          <div className="absolute inset-[-27.87%_-44.19%_-24.4%_-45.23%]">
            <svg className="block size-full" fill="none" height="3.12055" preserveAspectRatio="none" viewBox="0 0 2.14333 3.12055" width="2.14333">
              <path d={svgPaths.pa296780} fill="#A2A9B0" id="path1010" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.86%_0_84.58%_99.42%]" data-name="path1042">
          <div className="absolute inset-[-75.63%_-117.66%_-107.44%_-93.9%]">
            <svg className="block size-full" fill="none" height="1.87136" preserveAspectRatio="none" viewBox="0 0 1.65905 1.87136" width="1.65905">
              <path d={svgPaths.p3c83a500} fill="#A2A9B0" id="path1042" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[71.88%_46.49%_0_0]" data-name="path1178 1">
          <div className="absolute inset-[-1.59%_-1.19%_-1.49%_-1.41%]">
            <svg className="block size-full" fill="none" height="34.5489" preserveAspectRatio="none" viewBox="0 0 50.472 34.5489" width="50.472">
              <path d={svgPaths.p16564700} fill="#A2A9B0" id="path1178 1" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[28.88%_59.83%_63.09%_34.27%]" data-name="Riau">
        <G />
        <G1 />
        <G2 />
        <G4 />
        <G5 />
        <G6 />
        <G7 />
        <G8 />
        <G9 />
        <G10 />
        <div className="absolute inset-[-1.87%_-0.67%_-0.62%_-0.59%]">
          <svg className="block size-full" fill="none" height="84.217" preserveAspectRatio="none" viewBox="0 0 86.0116 84.217" width="86.0116">
            <path d={svgPaths.p348c7df0} fill="#A2A9B0" id="Riau" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.14%_10.5%_56.04%_80.92%]" data-name="Papua Barat">
        <div className="absolute inset-[83.34%_44.83%_14.58%_53.45%]" data-name="path238">
          <div className="absolute inset-[-20.54%_-23.81%_-29.06%_-29.88%]">
            <svg className="block size-full" fill="none" height="3.75831" preserveAspectRatio="none" viewBox="0 0 3.2737 3.75831" width="3.2737">
              <path d={svgPaths.p17da3c00} fill="#878D96" id="path238" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[20.15%_70.15%_71.76%_9.37%]" data-name="path838">
          <div className="absolute inset-[-5.99%_-2.06%_-5.18%_-4.99%]">
            <svg className="block size-full" fill="none" height="10.8761" preserveAspectRatio="none" viewBox="0 0 27.0775 10.8761" width="27.0775">
              <path d={svgPaths.p1c0d6600} fill="#878D96" id="path838" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.58%_82.06%_69.96%_13.79%]" data-name="path842">
          <div className="absolute inset-[-17.7%_-9.76%_-16.81%_-18.43%]">
            <svg className="block size-full" fill="none" height="4.00157" preserveAspectRatio="none" viewBox="0 0 6.57004 4.00157" width="6.57004">
              <path d={svgPaths.pe8538c0} fill="#878D96" id="path842" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[34.08%_77.64%_62.7%_12.72%]" data-name="path846">
          <div className="absolute inset-[-24.96%_-7.8%_-23.92%_-7.95%]">
            <svg className="block size-full" fill="none" height="5.8069" preserveAspectRatio="none" viewBox="0 0 13.7925 5.8069" width="13.7925">
              <path d={svgPaths.p9c8a500} fill="#878D96" id="path846" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[36.54%_74.89%_54.89%_17.35%]" data-name="path850">
          <div className="absolute inset-[-4.86%_-5.98%_-4.89%_-5.22%]">
            <svg className="block size-full" fill="none" height="11.3911" preserveAspectRatio="none" viewBox="0 0 10.6583 11.3911" width="10.6583">
              <path d={svgPaths.p28b3b780} fill="#878D96" id="path850" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.23%_95.42%_56.96%_0.65%]" data-name="path854">
          <div className="absolute inset-[-22.92%_-10.79%_-26.56%_-14.27%]">
            <svg className="block size-full" fill="none" height="3.26106" preserveAspectRatio="none" viewBox="0 0 6.07764 3.26106" width="6.07764">
              <path d={svgPaths.p18bf6a00} fill="#878D96" id="path854" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[51.28%_86.53%_41.67%_0]" data-name="path858">
          <div className="absolute inset-[-5.86%_-3%_-6.7%_-4.58%]">
            <svg className="block size-full" fill="none" height="9.59919" preserveAspectRatio="none" viewBox="0 0 17.9044 9.59919" width="17.9044">
              <path d={svgPaths.p12842600} fill="#878D96" id="path858" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[68.65%_64.28%_30.58%_34.16%]" data-name="path862">
          <div className="absolute inset-[-54.02%_-45.91%_-57.26%_-48.17%]">
            <svg className="block size-full" fill="none" height="1.95551" preserveAspectRatio="none" viewBox="0 0 3.7466 1.95551" width="3.7466">
              <path d={svgPaths.p266e4900} fill="#878D96" id="path862" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[96.4%_28.13%_0_66.22%]" data-name="path866">
          <div className="absolute inset-[-14.18%_-27.25%_-12.06%_-7.53%]">
            <svg className="block size-full" fill="none" height="5.50796" preserveAspectRatio="none" viewBox="0 0 9.4206 5.50796" width="9.4206">
              <path d={svgPaths.p2951c400} fill="#878D96" id="path866" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.27%_16.7%_43.91%_81.68%]" data-name="path878">
          <div className="absolute inset-[-15.23%_-25.25%_-25.97%_-25.04%]">
            <svg className="block size-full" fill="none" height="6.53422" preserveAspectRatio="none" viewBox="0 0 3.00109 6.53422" width="3.00109">
              <path d={svgPaths.p35fc5a80} fill="#878D96" id="path878" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[57.24%_13.47%_39.98%_84.81%]" data-name="path882">
          <div className="absolute inset-[-16.21%_-23.47%_-15.79%_-23.47%]">
            <svg className="block size-full" fill="none" height="4.45037" preserveAspectRatio="none" viewBox="0 0 3.1302 4.45037" width="3.1302">
              <path d={svgPaths.p11f24f00} fill="#878D96" id="path882" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.64%_10.56%_34.52%_88.31%]" data-name="path886">
          <div className="absolute inset-[-19.61%_-36.76%_-14.54%_-40.24%]">
            <svg className="block size-full" fill="none" height="4.61175" preserveAspectRatio="none" viewBox="0 0 2.47423 4.61175" width="2.47423">
              <path d={svgPaths.p6347300} fill="#878D96" id="path886" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_71.34%_99.4%_28.39%]" data-name="path970">
          <div className="absolute inset-[-81.7%_-150.29%_-136.98%_-150.29%]">
            <svg className="block size-full" fill="none" height="2.31742" preserveAspectRatio="none" viewBox="0 0 1.33269 2.31742" width="1.33269">
              <path d={svgPaths.p360b9900} fill="#878D96" id="path970" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0.71%_71.77%_98.96%_28.02%]" data-name="path974">
          <div className="absolute inset-[-376.19%_-187.85%_-101.08%_-167.79%]">
            <svg className="block size-full" fill="none" height="2.2898" preserveAspectRatio="none" viewBox="0 0 1.2128 2.2898" width="1.2128">
              <path d={svgPaths.p1da1aa80} fill="#878D96" id="path974" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.58%_96.12%_70.62%_2.59%]" data-name="path1018">
          <div className="absolute inset-[-22.92%_-31.29%_-24.86%_-31.29%]">
            <svg className="block size-full" fill="none" height="3.22382" preserveAspectRatio="none" viewBox="0 0 2.5977 3.22382" width="2.5977">
              <path d={svgPaths.p3e27bf80} fill="#878D96" id="path1018" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.54%_0_1.97%_22.74%]" data-name="Vector">
          <div className="absolute inset-[-0.58%_-0.62%_-0.58%_-0.53%]">
            <svg className="block size-full" fill="none" height="87.5417" preserveAspectRatio="none" viewBox="0 0 96.5622 87.5417" width="96.5622">
              <path d={svgPaths.p34cbfc00} fill="#878D96" id="Vector" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[32.81%_1.35%_45.51%_86.87%]" data-name="Papua">
        <div className="absolute inset-[75.87%_29.17%_22.64%_68.55%]" data-name="path242">
          <div className="absolute inset-[-21.49%_-13.27%_-15.39%_-12.95%]">
            <svg className="block size-full" fill="none" height="4.52443" preserveAspectRatio="none" viewBox="0 0 4.87336 4.52443" width="4.87336">
              <path d={svgPaths.p30407480} fill="#878D96" id="path242" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[82.42%_25.21%_6.79%_55.48%]" data-name="path870">
          <div className="absolute inset-[-2.09%_-2.52%_-2.09%_-1.53%]">
            <svg className="block size-full" fill="none" height="24.9324" preserveAspectRatio="none" viewBox="0 0 34.0764 24.9324" width="34.0764">
              <path d={svgPaths.p3d32eb40} fill="#878D96" id="path870" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[90.53%_27.48%_7%_67.65%]" data-name="path874">
          <div className="absolute inset-[-9.11%_-6.06%_-9.3%_-6.26%]">
            <svg className="block size-full" fill="none" height="6.4974" preserveAspectRatio="none" viewBox="0 0 9.27151 6.4974" width="9.27151">
              <path d={svgPaths.p50f1800} fill="#878D96" id="path874" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[17.25%_79.82%_80.79%_17.51%]" data-name="path890">
          <div className="absolute inset-[-11.46%_-14.97%_-11.46%_-13.49%]">
            <svg className="block size-full" fill="none" height="5.36315" preserveAspectRatio="none" viewBox="0 0 5.81473 5.36315" width="5.81473">
              <path d={svgPaths.p3f3e56c0} fill="#878D96" id="path890" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[22.73%_75.34%_76.74%_21.44%]" data-name="path894">
          <div className="absolute inset-[-45.5%_-22.22%_-42.09%_-9.72%]">
            <svg className="block size-full" fill="none" height="2.2323" preserveAspectRatio="none" viewBox="0 0 7.20193 2.2323" width="7.20193">
              <path d={svgPaths.p240f3580} fill="#878D96" id="path894" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[23.89%_54.22%_72.98%_25.91%]" data-name="path898">
          <div className="absolute inset-[-7.97%_-1.48%_-8.77%_-2.27%]">
            <svg className="block size-full" fill="none" height="8.1036" preserveAspectRatio="none" viewBox="0 0 34.9466 8.1036" width="34.9466">
              <path d={svgPaths.p309e0880} fill="#878D96" id="path898" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.12%_61.37%_79.77%_25.09%]" data-name="path902">
          <div className="absolute inset-[-3.94%_-2.22%_-3.74%_-2.18%]">
            <svg className="block size-full" fill="none" height="14.5933" preserveAspectRatio="none" viewBox="0 0 23.9754 14.5933" width="23.9754">
              <path d={svgPaths.p249dd700} fill="#878D96" id="path902" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_88.54%_99.64%_10.84%]" data-name="path978">
          <div className="absolute inset-[-63.03%_-50.19%_-65.61%_-51.42%]">
            <svg className="block size-full" fill="none" height="1.81378" preserveAspectRatio="none" viewBox="0 0 2.1474 1.81378" width="2.1474">
              <path d={svgPaths.p1c2a2600} fill="#878D96" id="path978" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[32.38%_98.43%_66.82%_0]" data-name="path1026">
          <div className="absolute inset-[-29.22%_-18.78%_-28.01%_-29.92%]">
            <svg className="block size-full" fill="none" height="2.80656" preserveAspectRatio="none" viewBox="0 0 3.95916 2.80656" width="3.95916">
              <path d={svgPaths.p28ec9c00} fill="#878D96" id="path1026" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[22.7%_0_0_14.68%]" data-name="Vector">
          <div className="absolute inset-[-0.29%_-0.36%_-0.55%_-0.39%]">
            <svg className="block size-full" fill="none" height="173.003" preserveAspectRatio="none" viewBox="0 0 145.732 173.003" width="145.732">
              <path d={svgPaths.p2ca8fe80} fill="#878D96" id="Vector" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[52.23%_26.2%_41.5%_63.97%]" data-name="Nusa Tenggara Timur">
        <div className="absolute inset-[12.46%_32.13%_81.15%_63.17%]" data-name="path90">
          <div className="absolute inset-[-12.2%_-8.06%_-12.5%_-8.8%]">
            <svg className="block size-full" fill="none" height="5.11089" preserveAspectRatio="none" viewBox="0 0 7.77891 5.11089" width="7.77891">
              <path d={svgPaths.p16e82000} fill="#A2A9B0" id="path90" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[42.64%_69.47%_21.73%_0]" data-name="path558">
          <div className="absolute inset-[-2.36%_-1.2%_-2.19%_-1.17%]">
            <svg className="block size-full" fill="none" height="23.9144" preserveAspectRatio="none" viewBox="0 0 44.2249 23.9144" width="44.2249">
              <path d={svgPaths.p21496e20} fill="#A2A9B0" id="path558" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.56%_89.6%_76.42%_7.01%]" data-name="path562">
          <div className="absolute inset-[-9.82%_-16.24%_-7.62%_-9.04%]">
            <svg className="block size-full" fill="none" height="8.30684" preserveAspectRatio="none" viewBox="0 0 6.00474 8.30684" width="6.00474">
              <path d={svgPaths.p1e24da40} fill="#A2A9B0" id="path562" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[18.33%_86.31%_74.56%_10.77%]" data-name="path566">
          <div className="absolute inset-[-16.34%_-12.11%_-13.27%_-13.52%]">
            <svg className="block size-full" fill="none" height="5.9124" preserveAspectRatio="none" viewBox="0 0 5.18508 5.9124" width="5.18508">
              <path d={svgPaths.p3c0ce700} fill="#A2A9B0" id="path566" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_34.43%_68.8%_13.83%]" data-name="path570">
          <div className="absolute inset-[-2.5%_-0.69%_-2.51%_-0.68%]">
            <svg className="block size-full" fill="none" height="21.033" preserveAspectRatio="none" viewBox="0 0 74.2288 21.033" width="74.2288">
              <path d={svgPaths.p15966f00} fill="#A2A9B0" id="path570" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.77%_29.3%_87.95%_65.43%]" data-name="path574">
          <div className="absolute inset-[-12.4%_-6.93%_-12.8%_-6.71%]">
            <svg className="block size-full" fill="none" height="5.04858" preserveAspectRatio="none" viewBox="0 0 8.47201 5.04858" width="8.47201">
              <path d={svgPaths.p21cf0800} fill="#A2A9B0" id="path574" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[3.91%_19.8%_81.67%_68.81%]" data-name="path578">
          <div className="absolute inset-[-5.4%_-3.15%_-5.4%_-3.72%]">
            <svg className="block size-full" fill="none" height="10.2552" preserveAspectRatio="none" viewBox="0 0 17.2167 10.2552" width="17.2167">
              <path d={svgPaths.p348017c0} fill="#A2A9B0" id="path578" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[3.91%_13.97%_82.9%_79.63%]" data-name="path582">
          <div className="absolute inset-[-6.05%_-6.07%_-5.91%_-8.12%]">
            <svg className="block size-full" fill="none" height="9.47408" preserveAspectRatio="none" viewBox="0 0 10.3377 9.47408" width="10.3377">
              <path d={svgPaths.p2e18f1f0} fill="#A2A9B0" id="path582" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[2.16%_0.47%_86.3%_86.5%]" data-name="path586">
          <div className="absolute inset-[-6.86%_-2.76%_-6.75%_-2.86%]">
            <svg className="block size-full" fill="none" height="8.41181" preserveAspectRatio="none" viewBox="0 0 19.4744 8.41181" width="19.4744">
              <path d={svgPaths.p3a78c372} fill="#A2A9B0" id="path586" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[82.39%_50.89%_11.12%_44.07%]" data-name="path590">
          <div className="absolute inset-[-12.01%_-7.33%_-12.04%_-8.22%]">
            <svg className="block size-full" fill="none" height="5.16623" preserveAspectRatio="none" viewBox="0 0 8.23007 5.16623" width="8.23007">
              <path d={svgPaths.p27e1e600} fill="#A2A9B0" id="path590" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[82.8%_28.17%_0_61.99%]" data-name="path594">
          <div className="absolute inset-[-6.75%_-3.66%_-4.53%_-3.68%]">
            <svg className="block size-full" fill="none" height="12.2858" preserveAspectRatio="none" viewBox="0 0 14.9336 12.2858" width="14.9336">
              <path d={svgPaths.p4a3cc00} fill="#A2A9B0" id="path594" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[72.5%_26.95%_20.39%_70.08%]" data-name="path598">
          <div className="absolute inset-[-11.62%_-13.22%_-10.96%_-11.92%]">
            <svg className="block size-full" fill="none" height="5.59139" preserveAspectRatio="none" viewBox="0 0 5.24816 5.59139" width="5.24816">
              <path d={svgPaths.pcfa1d00} fill="#A2A9B0" id="path598" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[7.72%_55.08%_90.01%_43.89%]" data-name="path918">
          <div className="absolute inset-[-34.98%_-34.14%_-35.89%_-45.76%]">
            <svg className="block size-full" fill="none" height="2.48518" preserveAspectRatio="none" viewBox="0 0 2.63459 2.48518" width="2.63459">
              <path d={svgPaths.p3fbbd200} fill="#A2A9B0" id="path918" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.77%_44.17%_84.86%_54.56%]" data-name="path922">
          <div className="absolute inset-[-32.88%_-31.59%_-38.16%_-31.13%]">
            <svg className="block size-full" fill="none" height="2.60075" preserveAspectRatio="none" viewBox="0 0 2.92442 2.60075" width="2.92442">
              <path d={svgPaths.p34abd580} fill="#A2A9B0" id="path922" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[88.77%_56.77%_9.89%_41.53%]" data-name="path1058">
          <div className="absolute inset-[-60.52%_-25.34%_-58.18%_-23.42%]">
            <svg className="block size-full" fill="none" height="1.87951" preserveAspectRatio="none" viewBox="0 0 3.5647 1.87951" width="3.5647">
              <path d={svgPaths.p70fb880} fill="#A2A9B0" id="path1058" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[31.31%_0_19.16%_72.72%]" data-name="path1074">
          <div className="absolute inset-[-2.04%_-1.3%_-1.64%_-1.35%]">
            <svg className="block size-full" fill="none" height="32.9681" preserveAspectRatio="none" viewBox="0 0 39.6291 32.9681" width="39.6291">
              <path d={svgPaths.p295a8700} fill="#A2A9B0" id="path1074" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[52.29%_35.61%_45.43%_59.1%]" data-name="Nusa Tenggara Barat">
        <div className="absolute inset-[4.82%_44.71%_72.52%_48.73%]" data-name="path86">
          <div className="absolute inset-[-9.48%_-10.43%_-9.45%_-10.09%]">
            <svg className="block size-full" fill="none" height="6.29016" preserveAspectRatio="none" viewBox="0 0 6.01691 6.29016" width="6.01691">
              <path d={svgPaths.p13d22f80} fill="#A2A9B0" id="path86" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[9.92%_73.32%_16.43%_0]" data-name="path546">
          <div className="absolute inset-[-3.03%_-2.58%_-4.06%_-2.46%]">
            <svg className="block size-full" fill="none" height="18.4068" preserveAspectRatio="none" viewBox="0 0 21.3269 18.4068" width="21.3269">
              <path d={svgPaths.p33edf480} fill="#A2A9B0" id="path546" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_0_0_26.51%]" data-name="path550">
          <div className="absolute inset-[-2.21%_-1.02%_-2.52%_-1.02%]">
            <svg className="block size-full" fill="none" height="24.4411" preserveAspectRatio="none" viewBox="0 0 57.0596 24.4411" width="57.0596">
              <path d={svgPaths.p2db8d600} fill="#A2A9B0" id="path550" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[3.4%_2.1%_84.14%_94.49%]" data-name="path554">
          <div className="absolute inset-[-19.13%_-19.66%_-17.19%_-19.59%]">
            <svg className="block size-full" fill="none" height="3.96523" preserveAspectRatio="none" viewBox="0 0 3.615 3.96523" width="3.615">
              <path d={svgPaths.p19e0d970} fill="#A2A9B0" id="path554" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[28.71%_19.29%_60.07%_72.42%]" data-name="Maluku Utara">
        <div className="absolute inset-[69.97%_22.13%_28.14%_75.81%]" data-name="path1046">
          <div className="absolute inset-[-23.84%_-21.3%_-23.45%_-20.3%]">
            <svg className="block size-full" fill="none" height="3.21322" preserveAspectRatio="none" viewBox="0 0 3.48753 3.21322" width="3.48753">
              <path d={svgPaths.p22eec100} fill="#A2A9B0" id="path1046" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[63.64%_42.75%_32.62%_54.12%]" data-name="path802">
          <div className="absolute inset-[-11.84%_-16.24%_-11.64%_-13.41%]">
            <svg className="block size-full" fill="none" height="5.306" preserveAspectRatio="none" viewBox="0 0 4.83321 5.306" width="4.83321">
              <path d={svgPaths.p5e42b00} fill="#A2A9B0" id="path802" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[74.57%_35.62%_23.42%_59.92%]" data-name="path794">
          <div className="absolute inset-[-21.61%_-9.58%_-21.61%_-9.39%]">
            <svg className="block size-full" fill="none" height="3.31379" preserveAspectRatio="none" viewBox="0 0 6.33551 3.31379" width="6.33551">
              <path d={svgPaths.p3ae5c500} fill="#A2A9B0" id="path794" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[77.68%_26.87%_14.38%_58.42%]" data-name="path790">
          <div className="absolute inset-[-5.48%_-2.96%_-5.48%_-3.01%]">
            <svg className="block size-full" fill="none" height="10.123" preserveAspectRatio="none" viewBox="0 0 18.6218 10.123" width="18.6218">
              <path d={svgPaths.p6ff2540} fill="#A2A9B0" id="path790" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[89.99%_66.05%_0_29.6%]" data-name="path706">
          <div className="absolute inset-[-4.35%_-10.01%_-4.62%_-9.79%]">
            <svg className="block size-full" fill="none" height="12.5345" preserveAspectRatio="none" viewBox="0 0 6.21988 12.5345" width="6.21988">
              <path d={svgPaths.pd6b7d00} fill="#A2A9B0" id="path706" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[86.36%_61.15%_10.13%_19.62%]" data-name="path702">
          <div className="absolute inset-[-14.79%_-2.79%_-18.48%_-2.18%]">
            <svg className="block size-full" fill="none" height="5.37423" preserveAspectRatio="none" viewBox="0 0 24.1067 5.37423" width="24.1067">
              <path d={svgPaths.p24f92800} fill="#A2A9B0" id="path702" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.49%_80.55%_8.92%_0.61%]" data-name="path698">
          <div className="absolute inset-[-5.73%_-2.22%_-5.73%_-2.25%]">
            <svg className="block size-full" fill="none" height="9.72638" preserveAspectRatio="none" viewBox="0 0 23.5065 9.72638" width="23.5065">
              <path d={svgPaths.p13706880} fill="#A2A9B0" id="path698" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[78.14%_41.53%_20.31%_56.58%]" data-name="path226">
          <div className="absolute inset-[-28.01%_-22.09%_-29.14%_-24.11%]">
            <svg className="block size-full" fill="none" height="2.80506" preserveAspectRatio="none" viewBox="0 0 3.30889 2.80506" width="3.30889">
              <path d={svgPaths.pab6fe00} fill="#A2A9B0" id="path226" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[89.99%_98.66%_8.52%_0]" data-name="path158">
          <div className="absolute inset-[-29.09%_-31.77%_-36.64%_-32.33%]">
            <svg className="block size-full" fill="none" height="2.84855" preserveAspectRatio="none" viewBox="0 0 2.62164 2.84855" width="2.62164">
              <path d={svgPaths.p2a07fe00} fill="#A2A9B0" id="path158" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[25.26%_60.37%_73.48%_38.63%]" data-name="path966">
          <div className="absolute inset-[-36.21%_-41.74%_-52.55%_-52.68%]">
            <svg className="block size-full" fill="none" height="2.74533" preserveAspectRatio="none" viewBox="0 0 2.32957 2.74533" width="2.32957">
              <g id="path966">
                <path d={svgPaths.p32ee4d00} fill="#A2A9B0" />
                <path d={svgPaths.p32ee4d00} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[50.63%_0_44.25%_94.65%]" data-name="path834">
          <div className="absolute inset-[-8.5%_-7.82%_-8.76%_-7.82%]">
            <svg className="block size-full" fill="none" height="6.89885" preserveAspectRatio="none" viewBox="0 0 7.39045 6.89885" width="7.39045">
              <path d={svgPaths.p3d570ff0} fill="#A2A9B0" id="path834" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.34%_12.49%_30.61%_58.58%]" data-name="path830">
          <div className="absolute inset-[-0.88%_-3.68%_-0.71%_-1.45%]">
            <svg className="block size-full" fill="none" height="71.2555" preserveAspectRatio="none" viewBox="0 0 36.3187 71.2555" width="36.3187">
              <path d={svgPaths.p164f7100} fill="#A2A9B0" id="path830" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_16.78%_87.4%_73.8%]" data-name="path826">
          <div className="absolute inset-[-3.99%_-4.53%_-4.28%_-5.85%]">
            <svg className="block size-full" fill="none" height="15.6765" preserveAspectRatio="none" viewBox="0 0 12.418 15.6765" width="12.418">
              <path d={svgPaths.p2e20ad00} fill="#A2A9B0" id="path826" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[44.19%_40.91%_53.85%_57.52%]" data-name="path822">
          <div className="absolute inset-[-22.24%_-27.44%_-23.19%_-26.83%]">
            <svg className="block size-full" fill="none" height="3.26902" preserveAspectRatio="none" viewBox="0 0 2.87524 3.26902" width="2.87524">
              <path d={svgPaths.p37b7180} fill="#A2A9B0" id="path822" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[48.73%_40.13%_47.53%_58.53%]" data-name="path818">
          <div className="absolute inset-[-14.39%_-63.43%_-13.02%_-31.3%]">
            <svg className="block size-full" fill="none" height="5.4748" preserveAspectRatio="none" viewBox="0 0 3.11094 5.4748" width="3.11094">
              <path d={svgPaths.p123db540} fill="#A2A9B0" id="path818" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[36.88%_40.3%_60.47%_57.92%]" data-name="path814">
          <div className="absolute inset-[-18.78%_-23.77%_-20.82%_-27.32%]">
            <svg className="block size-full" fill="none" height="4.24537" preserveAspectRatio="none" viewBox="0 0 3.21848 4.24537" width="3.21848">
              <path d={svgPaths.p163cb000} fill="#A2A9B0" id="path814" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[34.75%_41.69%_63.12%_56.52%]" data-name="path810">
          <div className="absolute inset-[-22.93%_-23.77%_-20.44%_-24.56%]">
            <svg className="block size-full" fill="none" height="3.5069" preserveAspectRatio="none" viewBox="0 0 3.15941 3.5069" width="3.15941">
              <path d={svgPaths.p1c939200} fill="#A2A9B0" id="path810" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[56.5%_43.31%_38.09%_52.9%]" data-name="path806">
          <div className="absolute inset-[-11.34%_-12.66%_-8.05%_-11.05%]">
            <svg className="block size-full" fill="none" height="7.41889" preserveAspectRatio="none" viewBox="0 0 5.59953 7.41889" width="5.59953">
              <path d={svgPaths.p34b30000} fill="#A2A9B0" id="path806" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[57.42%_31.83%_31.13%_56.63%]" data-name="path798">
          <div className="absolute inset-[-3.8%_-3.63%]">
            <svg className="block size-full" fill="none" height="14.1556" preserveAspectRatio="none" viewBox="0 0 14.7792 14.1556" width="14.7792">
              <path d={svgPaths.pbdbfa80} fill="#A2A9B0" id="path798" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[4.55%_26.14%_93.1%_72.52%]" data-name="path234">
          <div className="absolute inset-[-20.41%_-33.41%_-23.56%_-31.3%]">
            <svg className="block size-full" fill="none" height="3.90213" preserveAspectRatio="none" viewBox="0 0 2.63126 3.90213" width="2.63126">
              <path d={svgPaths.p6048100} fill="#A2A9B0" id="path234" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[7.19%_33.33%_91.6%_65.38%]" data-name="path230">
          <div className="absolute inset-[-36.66%_-32.66%_-37.31%_-33.52%]">
            <svg className="block size-full" fill="none" height="2.4152" preserveAspectRatio="none" viewBox="0 0 2.54421 2.4152" width="2.54421">
              <g id="path230">
                <path d={svgPaths.p156a8540} fill="#A2A9B0" />
                <path d={svgPaths.p156a8540} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[40.61%_10.93%_47.17%_74.74%]" data-name="Maluku">
        <div className="absolute inset-[53.48%_7.23%_45.14%_92.13%]" data-name="path1050">
          <div className="absolute inset-[-30.03%_-37.56%_-29.8%_-37.56%]">
            <svg className="block size-full" fill="none" height="2.74714" preserveAspectRatio="none" viewBox="0 0 2.33131 2.74714" width="2.33131">
              <path d={svgPaths.p250c9100} fill="#C1C7CD" id="path1050" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.16%_1.65%_31.94%_97.13%]" data-name="path1030">
          <div className="absolute inset-[-21.01%_-20.8%_-21.42%_-22.06%]">
            <svg className="block size-full" fill="none" height="3.38968" preserveAspectRatio="none" viewBox="0 0 3.6138 3.38968" width="3.6138">
              <path d={svgPaths.p1ac70e80} fill="#C1C7CD" id="path1030" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.51%_31.45%_53.12%_67.9%]" data-name="path1006">
          <div className="absolute inset-[-29.09%_-40.57%_-29.09%_-38.74%]">
            <svg className="block size-full" fill="none" height="2.71881" preserveAspectRatio="none" viewBox="0 0 2.38725 2.71881" width="2.38725">
              <path d={svgPaths.p385fcc00} fill="#C1C7CD" id="path1006" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[75.24%_62.9%_24.18%_36.65%]" data-name="path1002">
          <div className="absolute inset-[-68.76%_-57.56%_-68.76%_-53.65%]">
            <svg className="block size-full" fill="none" height="1.72721" preserveAspectRatio="none" viewBox="0 0 1.96841 1.72721" width="1.96841">
              <path d={svgPaths.p134e9f00} fill="#C1C7CD" id="path1002" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[94.19%_83.97%_4.12%_15.13%]" data-name="path94">
          <div className="absolute inset-[-23.64%_-26.83%_-24.08%_-26.83%]">
            <svg className="block size-full" fill="none" height="3.12491" preserveAspectRatio="none" viewBox="0 0 2.86374 3.12491" width="2.86374">
              <path d={svgPaths.p3941db00} fill="#C1C7CD" id="path94" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[96.57%_78.16%_1.85%_20%]" data-name="path98">
          <div className="absolute inset-[-25.21%_-13.9%_-25.86%_-35.17%]">
            <svg className="block size-full" fill="none" height="2.99616" preserveAspectRatio="none" viewBox="0 0 5.65583 2.99616" width="5.65583">
              <path d={svgPaths.p33959532} fill="#C1C7CD" id="path98" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[97.41%_72.94%_1.06%_25.29%]" data-name="path102">
          <div className="absolute inset-[-26.08%_-18.36%_-26.08%_-15.65%]">
            <svg className="block size-full" fill="none" height="2.9172" preserveAspectRatio="none" viewBox="0 0 4.9061 2.9172" width="4.9061">
              <path d={svgPaths.p38eec100} fill="#C1C7CD" id="path102" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[97.04%_64.23%_1.43%_33.58%]" data-name="path106">
          <div className="absolute inset-[-26.4%_-11.48%_-26.08%_-17.8%]">
            <svg className="block size-full" fill="none" height="2.92316" preserveAspectRatio="none" viewBox="0 0 5.85201 2.92316" width="5.85201">
              <path d={svgPaths.p2f382b00} fill="#C1C7CD" id="path106" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.12%_41.19%_11.25%_57.06%]" data-name="path110">
          <div className="absolute inset-[-48.94%_-17.33%_-24.4%_-16.51%]">
            <svg className="block size-full" fill="none" height="3.55228" preserveAspectRatio="none" viewBox="0 0 4.81064 3.55228" width="4.81064">
              <path d={svgPaths.p39d0a900} fill="#C1C7CD" id="path110" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[84.74%_42.81%_14.04%_55.61%]" data-name="path114">
          <div className="absolute inset-[-39.75%_-26.47%_-34.64%_-15.33%]">
            <svg className="block size-full" fill="none" height="2.65161" preserveAspectRatio="none" viewBox="0 0 4.62504 2.65161" width="4.62504">
              <path d={svgPaths.p1b5f5b40} fill="#C1C7CD" id="path114" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.1%_40.61%_15.1%_57.16%]" data-name="path118">
          <div className="absolute inset-[-22.24%_-17.63%_-22.24%_-11.33%]">
            <svg className="block size-full" fill="none" height="3.24775" preserveAspectRatio="none" viewBox="0 0 5.92334 3.24775" width="5.92334">
              <g id="path118">
                <path d={svgPaths.p158aab80} fill="#C1C7CD" />
                <path d={svgPaths.p158aab80} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[81.2%_39.39%_17.58%_59.71%]" data-name="path122">
          <div className="absolute inset-[-37.57%_-37.45%_-46.8%_-52.72%]">
            <svg className="block size-full" fill="none" height="2.80324" preserveAspectRatio="none" viewBox="0 0 3.5448 2.80324" width="3.5448">
              <path d={svgPaths.p19ee9a80} fill="#C1C7CD" id="path122" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.12%_35.77%_27.67%_63.1%]" data-name="path126">
          <div className="absolute inset-[-19.92%_-23.32%_-19.73%_-23.5%]">
            <svg className="block size-full" fill="none" height="3.8776" preserveAspectRatio="none" viewBox="0 0 3.42077 3.8776" width="3.42077">
              <path d={svgPaths.p31a608f0} fill="#C1C7CD" id="path126" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[18.53%_83.87%_79.88%_15.03%]" data-name="path182">
          <div className="absolute inset-[-25.21%_-22.41%_-25.21%_-22.32%]">
            <svg className="block size-full" fill="none" height="2.98326" preserveAspectRatio="none" viewBox="0 0 3.27547 2.98326" width="3.27547">
              <path d={svgPaths.p29591700} fill="#C1C7CD" id="path182" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.55%_79.48%_89.55%_18.71%]" data-name="path186">
          <div className="absolute inset-[-21.01%_-13.41%_-21.62%_-23.77%]">
            <svg className="block size-full" fill="none" height="3.39453" preserveAspectRatio="none" viewBox="0 0 5.11384 3.39453" width="5.11384">
              <path d={svgPaths.p121dcf00} fill="#C1C7CD" id="path186" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[6.71%_77.81%_91.45%_20.55%]" data-name="path190">
          <div className="absolute inset-[-21.61%_-15.74%_-22.24%_-17.75%]">
            <svg className="block size-full" fill="none" height="3.32842" preserveAspectRatio="none" viewBox="0 0 4.53159 3.32842" width="4.53159">
              <path d={svgPaths.p6455d00} fill="#C1C7CD" id="path190" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[2.48%_75.68%_95.46%_22.52%]" data-name="path194">
          <div className="absolute inset-[-19.39%_-20.5%_-19.48%_-13.41%]">
            <svg className="block size-full" fill="none" height="3.58049" preserveAspectRatio="none" viewBox="0 0 4.99206 3.58049" width="4.99206">
              <path d={svgPaths.p20188480} fill="#C1C7CD" id="path194" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[31.15%_54.23%_67.79%_44.81%]" data-name="path198">
          <div className="absolute inset-[-39.34%_-26.28%_-43.57%_-90.93%]">
            <svg className="block size-full" fill="none" height="2.41842" preserveAspectRatio="none" viewBox="0 0 4.33762 2.41842" width="4.33762">
              <path d={svgPaths.p1e706f00} fill="#C1C7CD" id="path198" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.16%_27.48%_49.79%_71.71%]" data-name="path202">
          <div className="absolute inset-[-46.2%_-43.97%_-47.5%_-30.05%]">
            <svg className="block size-full" fill="none" height="2.56108" preserveAspectRatio="none" viewBox="0 0 2.89592 2.56108" width="2.89592">
              <path d={svgPaths.p1d04bb00} fill="#C1C7CD" id="path202" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.37%_22.77%_47.84%_76.42%]" data-name="path206">
          <div className="absolute inset-[-22.76%_-30.04%_-16.3%_-30.04%]">
            <svg className="block size-full" fill="none" height="4.87222" preserveAspectRatio="none" viewBox="0 0 2.66428 4.87222" width="2.66428">
              <path d={svgPaths.p24bdea70} fill="#C1C7CD" id="path206" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[57.97%_5.03%_36.17%_91.52%]" data-name="path210">
          <div className="absolute inset-[-14.32%_-7.02%_-6.81%_-7.2%]">
            <svg className="block size-full" fill="none" height="8.88853" preserveAspectRatio="none" viewBox="0 0 8.13533 8.88853" width="8.13533">
              <path d={svgPaths.p1329f680} fill="#C1C7CD" id="path210" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.99%_3.06%_32.58%_94.03%]" data-name="path214">
          <div className="absolute inset-[-9%_-8.8%_-10.61%_-8.35%]">
            <svg className="block size-full" fill="none" height="6.64256" preserveAspectRatio="none" viewBox="0 0 7.01826 6.64256" width="7.01826">
              <path d={svgPaths.pfc62300} fill="#C1C7CD" id="path214" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[68.48%_1.65%_28.19%_97.1%]" data-name="path218">
          <div className="absolute inset-[-12.01%_-19.26%_-13.42%_-27.23%]">
            <svg className="block size-full" fill="none" height="5.22357" preserveAspectRatio="none" viewBox="0 0 3.80311 5.22357" width="3.80311">
              <path d={svgPaths.pc681300} fill="#C1C7CD" id="path218" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[63.09%_0_33.53%_99%]" data-name="path222">
          <div className="absolute inset-[-11.82%_-24.58%_-14.84%_-27.44%]">
            <svg className="block size-full" fill="none" height="5.35906" preserveAspectRatio="none" viewBox="0 0 3.13716 5.35906" width="3.13716">
              <path d={svgPaths.pe8c55f0} fill="#C1C7CD" id="path222" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[85.9%_88.29%_5.91%_0]" data-name="path602">
          <div className="absolute inset-[-4.88%_-2.07%_-5.39%_-2.07%]">
            <svg className="block size-full" fill="none" height="11.299" preserveAspectRatio="none" viewBox="0 0 25.1636 11.299" width="25.1636">
              <path d={svgPaths.p21638400} fill="#C1C7CD" id="path602" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[84.95%_81.26%_12.41%_17.23%]" data-name="path606">
          <div className="absolute inset-[-15.28%_-16.15%_-15.13%_-15.98%]">
            <svg className="block size-full" fill="none" height="4.31054" preserveAspectRatio="none" viewBox="0 0 4.13383 4.31054" width="4.13383">
              <path d={svgPaths.p36ae0300} fill="#C1C7CD" id="path606" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[95.62%_74.23%_1.43%_21.77%]" data-name="path610">
          <div className="absolute inset-[-13.92%_-6.61%_-14.04%_-7.3%]">
            <svg className="block size-full" fill="none" height="4.73713" preserveAspectRatio="none" viewBox="0 0 9.40226 4.73713" width="9.40226">
              <path d={svgPaths.p316a18c0} fill="#C1C7CD" id="path610" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[77.09%_67.9%_20.01%_30.23%]" data-name="path614">
          <div className="absolute inset-[-14.3%_-12.95%_-18.94%_-13.46%]">
            <svg className="block size-full" fill="none" height="4.84457" preserveAspectRatio="none" viewBox="0 0 4.8804 4.84457" width="4.8804">
              <path d={svgPaths.p2fb7a800} fill="#C1C7CD" id="path614" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[90.29%_55.16%_5.07%_41.77%]" data-name="path618">
          <div className="absolute inset-[-8.59%_-8.02%_-8.59%_-7.97%]">
            <svg className="block size-full" fill="none" height="6.81761" preserveAspectRatio="none" viewBox="0 0 7.33513 6.81761" width="7.33513">
              <path d={svgPaths.p22b5a80} fill="#C1C7CD" id="path618" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[77.88%_34.52%_5.6%_58.23%]" data-name="path622">
          <div className="absolute inset-[-2.54%_-4.28%_-3.31%_-3.44%]">
            <svg className="block size-full" fill="none" height="21.9007" preserveAspectRatio="none" viewBox="0 0 16.1339 21.9007" width="16.1339">
              <path d={svgPaths.p3202600} fill="#C1C7CD" id="path622" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[95.25%_40.71%_0_54.71%]" data-name="path626">
          <div className="absolute inset-[-9.82%_-9.11%_-8.4%_-9.15%]">
            <svg className="block size-full" fill="none" height="7.03413" preserveAspectRatio="none" viewBox="0 0 11.1784 7.03413" width="11.1784">
              <path d={svgPaths.p32a5e600} fill="#C1C7CD" id="path626" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[77.72%_31.87%_19.48%_65.39%]" data-name="path630">
          <div className="absolute inset-[-15.97%_-8.84%_-17.14%_-11.14%]">
            <svg className="block size-full" fill="none" height="4.66364" preserveAspectRatio="none" viewBox="0 0 6.78857 4.66364" width="6.78857">
              <path d={svgPaths.p2530bd80} fill="#C1C7CD" id="path630" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.07%_83.61%_80.99%_2.61%]" data-name="path730">
          <div className="absolute inset-[-2.87%_-2.04%_-2.86%_-1.76%]">
            <svg className="block size-full" fill="none" height="18.4536" preserveAspectRatio="none" viewBox="0 0 29.504 18.4536" width="29.504">
              <path d={svgPaths.p2183f980} fill="#C1C7CD" id="path730" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_44.03%_80.46%_22.68%]" data-name="path734">
          <div className="absolute inset-[-2.04%_-0.98%_-2.06%_-0.73%]">
            <svg className="block size-full" fill="none" height="25.4646" preserveAspectRatio="none" viewBox="0 0 69.8685 25.4646" width="69.8685">
              <path d={svgPaths.pa2beae0} fill="#C1C7CD" id="path734" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.99%_71.77%_82%_23.45%]" data-name="path738">
          <div className="absolute inset-[-8.29%_-5.47%_-9.92%_-5.48%]">
            <svg className="block size-full" fill="none" height="7.42377" preserveAspectRatio="none" viewBox="0 0 10.9315 7.42377" width="10.9315">
              <path d={svgPaths.p349a9800} fill="#C1C7CD" id="path738" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.09%_69.42%_84.53%_28.65%]" data-name="path742">
          <div className="absolute inset-[-18.37%_-13.44%_-21.05%_-13.86%]">
            <svg className="block size-full" fill="none" height="4.14765" preserveAspectRatio="none" viewBox="0 0 5.08451 4.14765" width="5.08451">
              <path d={svgPaths.peab3200} fill="#C1C7CD" id="path742" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.78%_67.55%_84.9%_30.52%]" data-name="path746">
          <div className="absolute inset-[-17.19%_-12.52%_-26.45%_-12.52%]">
            <svg className="block size-full" fill="none" height="4.17821" preserveAspectRatio="none" viewBox="0 0 4.99393 4.17821" width="4.99393">
              <path d={svgPaths.p1b2f8680} fill="#C1C7CD" id="path746" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[15.42%_66.74%_83.42%_32.58%]" data-name="path750">
          <div className="absolute inset-[-37.36%_-39.03%_-35.79%_-35.77%]">
            <svg className="block size-full" fill="none" height="2.51823" preserveAspectRatio="none" viewBox="0 0 2.4436 2.51823" width="2.4436">
              <path d={svgPaths.p3b77f200} fill="#C1C7CD" id="path750" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[21.54%_39.94%_77.14%_59.65%]" data-name="path754">
          <div className="absolute inset-[-48.8%_-57.77%_-33.67%_-57.77%]">
            <svg className="block size-full" fill="none" height="3.01565" preserveAspectRatio="none" viewBox="0 0 1.86547 3.01565" width="1.86547">
              <path d={svgPaths.p31fcd100} fill="#C1C7CD" id="path754" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[23.07%_38.32%_75.29%_60.48%]" data-name="path758">
          <div className="absolute inset-[-24.4%_-22.51%_-31.31%_-20.3%]">
            <svg className="block size-full" fill="none" height="3.191" preserveAspectRatio="none" viewBox="0 0 3.51742 3.191" width="3.51742">
              <path d={svgPaths.p2174ab00} fill="#C1C7CD" id="path758" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[21.07%_37.68%_76.93%_61.35%]" data-name="path762">
          <div className="absolute inset-[-22.27%_-31.82%_-19.9%_-25.87%]">
            <svg className="block size-full" fill="none" height="3.57167" preserveAspectRatio="none" viewBox="0 0 3.14876 3.57167" width="3.14876">
              <path d={svgPaths.p8a38d00} fill="#C1C7CD" id="path762" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.62%_35.16%_68.43%_64%]" data-name="path766">
          <div className="absolute inset-[-20.44%_-35.89%_-24.19%_-45.53%]">
            <svg className="block size-full" fill="none" height="3.53783" preserveAspectRatio="none" viewBox="0 0 3.13961 3.53783" width="3.13961">
              <path d={svgPaths.p22a72800} fill="#C1C7CD" id="path766" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[34.42%_34.32%_64.26%_65.32%]" data-name="path770">
          <div className="absolute inset-[-48.68%_-69.7%_-42.22%_-68.84%]">
            <svg className="block size-full" fill="none" height="3.15506" preserveAspectRatio="none" viewBox="0 0 1.74632 3.15506" width="1.74632">
              <path d={svgPaths.p2afca980} fill="#C1C7CD" id="path770" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[50.53%_22.68%_43.14%_75.13%]" data-name="path774">
          <div className="absolute inset-[-10.1%_-11.05%_-8.8%_-11.05%]">
            <svg className="block size-full" fill="none" height="9.43284" preserveAspectRatio="none" viewBox="0 0 5.52636 9.43284" width="5.52636">
              <path d={svgPaths.p5fe2500} fill="#C1C7CD" id="path774" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.09%_18.61%_42.13%_77.55%]" data-name="path778">
          <div className="absolute inset-[-3.13%_-6.31%_-5.3%_-6.58%]">
            <svg className="block size-full" fill="none" height="17.3467" preserveAspectRatio="none" viewBox="0 0 8.9425 17.3467" width="8.9425">
              <path d={svgPaths.p166bde32} fill="#C1C7CD" id="path778" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[60.93%_4.1%_25.61%_90.84%]" data-name="path782">
          <div className="absolute inset-[-3.22%_-5.59%_-3.68%_-4.78%]">
            <svg className="block size-full" fill="none" height="18.0208" preserveAspectRatio="none" viewBox="0 0 11.5354 18.0208" width="11.5354">
              <path d={svgPaths.p2f204600} fill="#C1C7CD" id="path782" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[47.52%_1.32%_35.48%_92.52%]" data-name="path786">
          <div className="absolute inset-[-2.48%_-13.85%_-3.11%_-4.22%]">
            <svg className="block size-full" fill="none" height="22.4774" preserveAspectRatio="none" viewBox="0 0 15.0116 22.4774" width="15.0116">
              <path d={svgPaths.p1492ae00} fill="#C1C7CD" id="path786" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[31.26%_56.06%_68.32%_43.71%]" data-name="path938">
          <div className="absolute inset-[-107.59%_-147.66%_-186.11%_-149.9%]">
            <svg className="block size-full" fill="none" height="2.08226" preserveAspectRatio="none" viewBox="0 0 1.85257 2.08226" width="1.85257">
              <path d={svgPaths.pb1c7900} fill="#C1C7CD" id="path938" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[46.09%_77.97%_53.75%_21.94%]" data-name="path942">
          <div className="absolute inset-[-464.69%_-396.84%_-397.85%_-465.7%]">
            <svg className="block size-full" fill="none" height="1.90919" preserveAspectRatio="none" viewBox="0 0 1.9212 1.90919" width="1.9212">
              <path d={svgPaths.p269ce080} fill="#C1C7CD" id="path942" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[47.1%_77.77%_52.69%_22.1%]" data-name="path946">
          <div className="absolute inset-[-400%_-242.77%_-312.22%_-469.46%]">
            <svg className="block size-full" fill="none" height="2.14748" preserveAspectRatio="none" viewBox="0 0 2.16312 2.14748" width="2.16312">
              <path d={svgPaths.pa003ac0} fill="#C1C7CD" id="path946" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[48.73%_80.48%_51.06%_19.39%]" data-name="path950">
          <div className="absolute inset-[-376.62%_-187.79%_-241.78%_-430.6%]">
            <svg className="block size-full" fill="none" height="1.89966" preserveAspectRatio="none" viewBox="0 0 1.91272 1.89966" width="1.91272">
              <path d={svgPaths.pbed9f80} fill="#C1C7CD" id="path950" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.05%_80.42%_50.79%_19.48%]" data-name="path954">
          <div className="absolute inset-[-464.61%_-396.76%_-397.85%_-465.7%]">
            <svg className="block size-full" fill="none" height="1.9087" preserveAspectRatio="none" viewBox="0 0 1.92173 1.9087" width="1.92173">
              <path d={svgPaths.p1fc1680} fill="#C1C7CD" id="path954" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[85.43%_56.77%_13.78%_42.52%]" data-name="path982">
          <div className="absolute inset-[-76.46%_-40.85%_-50.42%_-36.5%]">
            <svg className="block size-full" fill="none" height="2.24979" preserveAspectRatio="none" viewBox="0 0 2.59752 2.24979" width="2.59752">
              <path d={svgPaths.p9088b00} fill="#C1C7CD" id="path982" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[88.49%_53.45%_10.67%_46.13%]" data-name="path986">
          <div className="absolute inset-[-49.17%_-78.05%_-47.27%_-60.95%]">
            <svg className="block size-full" fill="none" height="2.07788" preserveAspectRatio="none" viewBox="0 0 2.068 2.07788" width="2.068">
              <path d={svgPaths.p1f6d7900} fill="#C1C7CD" id="path986" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[89.55%_52.71%_10.03%_46.65%]" data-name="path990">
          <div className="absolute inset-[-108.93%_-38.8%_-94.54%_-69.85%]">
            <svg className="block size-full" fill="none" height="1.60497" preserveAspectRatio="none" viewBox="0 0 2.77806 1.60497" width="2.77806">
              <path d={svgPaths.p11d0be80} fill="#C1C7CD" id="path990" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[63.46%_53.39%_36.22%_46.32%]" data-name="path994">
          <div className="absolute inset-[-130.12%_-95.65%_-132.78%_-155.23%]">
            <svg className="block size-full" fill="none" height="1.43949" preserveAspectRatio="none" viewBox="0 0 2.10156 1.43949" width="2.10156">
              <path d={svgPaths.p2b85da00} fill="#C1C7CD" id="path994" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.8%_58.81%_28.3%_40.65%]" data-name="path998">
          <div className="absolute inset-[-44.49%_-44.18%_-83.35%_-44.18%]">
            <svg className="block size-full" fill="none" height="2.56053" preserveAspectRatio="none" viewBox="0 0 2.13179 2.56053" width="2.13179">
              <path d={svgPaths.p2e0b0d00} fill="#C1C7CD" id="path998" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[42.74%_56.56%_52.45%_39.85%]" data-name="Lampung">
        <div className="absolute inset-[-1.16%_-1.04%_-1.02%_-0.97%]">
          <svg className="block size-full" fill="none" height="50.3235" preserveAspectRatio="none" viewBox="0 0 52.6936 50.3235" width="52.6936">
            <g id="Lampung">
              <path d={svgPaths.p32711580} fill="#878D96" />
              <path d={svgPaths.p32711580} stroke="white" strokeLinecap="round" />
            </g>
          </svg>
        </div>
        <G3 />
      </div>
      <div className="absolute inset-[24.81%_37.5%_67.72%_57.06%]" data-name="Kalimantan Utara">
        <div className="absolute inset-[-0.65%_-0.83%_-0.65%_-0.64%]">
          <svg className="block size-full" fill="none" height="77.4539" preserveAspectRatio="none" viewBox="0 0 79.4283 77.4539" width="79.4283">
            <path d={svgPaths.p1f685a00} fill="#A2A9B0" id="Vector" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute inset-[31.22%_13.61%_66.8%_82.99%]" data-name="path502">
          <div className="absolute inset-[-33.34%_-19.36%_-32.88%_-19.57%]">
            <svg className="block size-full" fill="none" height="2.52751" preserveAspectRatio="none" viewBox="0 0 3.69939 2.52751" width="3.69939">
              <path d={svgPaths.p323bda00} fill="#A2A9B0" id="path502" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[15.65%_4.34%_82.1%_92.09%]" data-name="path506">
          <div className="absolute inset-[-29.09%_-18.91%_-29.09%_-51.26%]">
            <svg className="block size-full" fill="none" height="2.71881" preserveAspectRatio="none" viewBox="0 0 4.75743 2.71881" width="4.75743">
              <path d={svgPaths.p36eff1f0} fill="#A2A9B0" id="path506" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[28.53%_9.18%_65.84%_86.39%]" data-name="path510">
          <div className="absolute inset-[-11.64%_-14.45%_-13.29%_-14.84%]">
            <svg className="block size-full" fill="none" height="5.36826" preserveAspectRatio="none" viewBox="0 0 4.47493 5.36826" width="4.47493">
              <path d={svgPaths.pc528180} fill="#A2A9B0" id="path510" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[23.95%_13.95%_71.81%_77.3%]" data-name="path514">
          <div className="absolute inset-[-15.44%_-7.29%_-16.85%_-7.29%]">
            <svg className="block size-full" fill="none" height="4.28532" preserveAspectRatio="none" viewBox="0 0 7.8563 4.28532" width="7.8563">
              <path d={svgPaths.p254d5a80} fill="#A2A9B0" id="path514" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[24.04%_3.06%_72.07%_93.54%]" data-name="path518">
          <div className="absolute inset-[-16.81%_-18.78%_-20.35%_-19.76%]">
            <svg className="block size-full" fill="none" height="4.08024" preserveAspectRatio="none" viewBox="0 0 3.68893 4.08024" width="3.68893">
              <path d={svgPaths.p3393c2f0} fill="#A2A9B0" id="path518" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[7.52%_7.23%_87.46%_88.18%]" data-name="path522">
          <div className="absolute inset-[-15.66%_-14.25%_-14.06%_-15.65%]">
            <svg className="block size-full" fill="none" height="4.97371" preserveAspectRatio="none" viewBox="0 0 4.66912 4.97371" width="4.66912">
              <path d={svgPaths.p119e4400} fill="#A2A9B0" id="path522" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[7%_1.87%_88.93%_91.58%]" data-name="path1070">
          <div className="absolute inset-[-18.76%_-11.82%_-16.09%_-20.81%]">
            <svg className="block size-full" fill="none" height="4.19007" preserveAspectRatio="none" viewBox="0 0 6.79818 4.19007" width="6.79818">
              <path d={svgPaths.p3f142300} fill="#A2A9B0" id="path1070" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[96.849px] left-[736px] top-[336.82px] w-[114.894px]" data-name="Kalimantan Tengah">
        <div className="absolute inset-[-0.52%_-0.45%_-0.54%_-0.44%]">
          <svg className="block size-full" fill="none" height="97.8698" preserveAspectRatio="none" viewBox="0 0 115.907 97.8698" width="115.907">
            <path d={svgPaths.p2c98000} fill="#C1C7CD" id="KT" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.49%_39.74%_54.89%_56.69%]" data-name="Kalimantan Selatan">
        <div className="absolute inset-[0_0_18.66%_0]" data-name="Vector">
          <div className="absolute inset-[-0.79%_-1.25%_-0.83%_-1.22%]">
            <svg className="block size-full" fill="none" height="64.4254" preserveAspectRatio="none" viewBox="0 0 52.6629 64.4254" width="52.6629">
              <path d={svgPaths.p2976f880} fill="#C1C7CD" id="Vector" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[97.54%_31.74%_0_64.64%]" data-name="path486">
          <div className="absolute inset-[-54.03%_-71.32%_-27.64%_-35.82%]">
            <svg className="block size-full" fill="none" height="3.48296" preserveAspectRatio="none" viewBox="0 0 3.86065 3.48296" width="3.86065">
              <path d={svgPaths.p202ae400} fill="#C1C7CD" id="path486" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[53.6%_11.27%_21.97%_74.74%]" data-name="path490">
          <div className="absolute inset-[-3.15%_-6.95%_-5.3%_-6.97%]">
            <svg className="block size-full" fill="none" height="20.6487" preserveAspectRatio="none" viewBox="0 0 8.19049 20.6487" width="8.19049">
              <path d={svgPaths.p2819e300} fill="#C1C7CD" id="path490" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.02%_6.35%_34.27%_88.86%]" data-name="path494">
          <div className="absolute inset-[-12.95%_-20.3%_-12.76%_-20.3%]">
            <svg className="block size-full" fill="none" height="7.56255" preserveAspectRatio="none" viewBox="0 0 3.46295 7.56255" width="3.46295">
              <path d={svgPaths.p20cb6180} fill="#C1C7CD" id="path494" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[24%_51.5%_64.04%_39.38%]" data-name="Kepulauan Riau">
        <div className="absolute inset-[31.48%_56.16%_64.36%_40.85%]" data-name="path438">
          <div className="absolute inset-[-11.28%_-21.78%_-10.12%_-16.86%]">
            <svg className="block size-full" fill="none" height="6.17964" preserveAspectRatio="none" viewBox="0 0 5.44477 6.17964" width="5.44477">
              <path d={svgPaths.p3171e0b0} fill="#878D96" id="path438" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[35.91%_49.47%_62.42%_49.82%]" data-name="path442">
          <div className="absolute inset-[-25.14%_-53.65%_-44.96%_-55.43%]">
            <svg className="block size-full" fill="none" height="3.48589" preserveAspectRatio="none" viewBox="0 0 1.94852 3.48589" width="1.94852">
              <g id="path442">
                <path d={svgPaths.p2fcb63c0} fill="#878D96" />
                <path d={svgPaths.p2fcb63c0} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[28.51%_48.66%_68.9%_49.92%]" data-name="path446">
          <div className="absolute inset-[-15.76%_-27.68%_-15.76%_-27.99%]">
            <svg className="block size-full" fill="none" height="4.17322" preserveAspectRatio="none" viewBox="0 0 2.90153 4.17322" width="2.90153">
              <path d={svgPaths.p20701ac0} fill="#878D96" id="path446" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[25.81%_48.56%_71.6%_50.38%]" data-name="path450">
          <div className="absolute inset-[-21.17%_-36.16%_-23.78%_-58.89%]">
            <svg className="block size-full" fill="none" height="4.59975" preserveAspectRatio="none" viewBox="0 0 2.72664 4.59975" width="2.72664">
              <path d={svgPaths.p1d08a900} fill="#878D96" id="path450" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_18.96%_98.33%_79.73%]" data-name="path454">
          <div className="absolute inset-[-39.36%_-28.89%_-24.4%_-28.89%]">
            <svg className="block size-full" fill="none" height="3.35594" preserveAspectRatio="none" viewBox="0 0 2.73072 3.35594" width="2.73072">
              <path d={svgPaths.p4c7fd80} fill="#878D96" id="path454" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[9.77%_12.06%_79.32%_80.59%]" data-name="path458">
          <div className="absolute inset-[-4.46%_-5.18%_-3.86%_-5.46%]">
            <svg className="block size-full" fill="none" height="14.4651" preserveAspectRatio="none" viewBox="0 0 10.6795 14.4651" width="10.6795">
              <path d={svgPaths.pf4fb880} fill="#878D96" id="path458" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[32.18%_22.3%_67.01%_76.53%]" data-name="path462">
          <div className="absolute inset-[-50.42%_-32.66%_-50.42%_-35.64%]">
            <svg className="block size-full" fill="none" height="1.99163" preserveAspectRatio="none" viewBox="0 0 2.57666 1.99163" width="2.57666">
              <path d={svgPaths.p2b3a7d00} fill="#878D96" id="path462" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[32.61%_3.6%_64.52%_94.32%]" data-name="path466">
          <div className="absolute inset-[-14.27%_-20.54%_-14.27%_-18.32%]">
            <svg className="block size-full" fill="none" height="4.50376" preserveAspectRatio="none" viewBox="0 0 3.78989 4.50376" width="3.78989">
              <path d={svgPaths.p3b72a400} fill="#878D96" id="path466" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[40.82%_0_57.83%_97.57%]" data-name="path470">
          <div className="absolute inset-[-30.25%_-15.65%_-31.59%_-15.65%]">
            <svg className="block size-full" fill="none" height="2.67477" preserveAspectRatio="none" viewBox="0 0 4.19519 2.67477" width="4.19519">
              <path d={svgPaths.p9ed8100} fill="#878D96" id="path470" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[68.74%_26.05%_30.02%_72.78%]" data-name="path474">
          <div className="absolute inset-[-32.88%_-37.42%_-41.49%_-32.66%]">
            <svg className="block size-full" fill="none" height="2.65129" preserveAspectRatio="none" viewBox="0 0 2.60393 2.65129" width="2.60393">
              <path d={svgPaths.p2b0eb700} fill="#878D96" id="path474" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[92.76%_79.62%_6.37%_18.8%]" data-name="path42">
          <div className="absolute inset-[-48.94%_-24.23%_-47.27%_-24.84%]">
            <svg className="block size-full" fill="none" height="2.07543" preserveAspectRatio="none" viewBox="0 0 3.07608 2.07543" width="3.07608">
              <path d={svgPaths.p240c0f00} fill="#878D96" id="path42" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[73.11%_77.39%_26.03%_20.68%]" data-name="path46">
          <div className="absolute inset-[-47.27%_-19.77%_-73.2%_-19.77%]">
            <svg className="block size-full" fill="none" height="2.33204" preserveAspectRatio="none" viewBox="0 0 3.5295 2.33204" width="3.5295">
              <path d={svgPaths.pb530b00} fill="#878D96" id="path46" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[72.35%_92.85%_26.19%_6.08%]" data-name="path50">
          <div className="absolute inset-[-53.99%_-37.81%_-28.86%_-38.18%]">
            <svg className="block size-full" fill="none" height="3.2639" preserveAspectRatio="none" viewBox="0 0 2.46022 3.2639" width="2.46022">
              <path d={svgPaths.p240b4100} fill="#878D96" id="path50" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[74.84%_96.4%_23.65%_2.74%]" data-name="path54">
          <div className="absolute inset-[-31.12%_-44.18%_-27.01%_-45.07%]">
            <svg className="block size-full" fill="none" height="2.92714" preserveAspectRatio="none" viewBox="0 0 2.14166 2.92714" width="2.14166">
              <path d={svgPaths.p39dc5c00} fill="#878D96" id="path54" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.9%_97.11%_28.13%_1.62%]" data-name="path58">
          <div className="absolute inset-[-42.02%_-30.04%_-42.02%_-39.48%]">
            <svg className="block size-full" fill="none" height="2.18997" preserveAspectRatio="none" viewBox="0 0 2.8212 2.18997" width="2.8212">
              <path d={svgPaths.p30753980} fill="#878D96" id="path58" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[93.84%_77.9%_0_16.12%]" data-name="path346">
          <div className="absolute inset-[-9.35%_-7.14%_-7.5%_-6.92%]">
            <svg className="block size-full" fill="none" height="8.80654" preserveAspectRatio="none" viewBox="0 0 8.95922 8.80654" width="8.95922">
              <path d={svgPaths.p1e2d8280} fill="#878D96" id="path346" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.1%_70.65%_6.21%_19.41%]" data-name="path350">
          <div className="absolute inset-[-8.62%_-5.43%_-10.64%_-3.83%]">
            <svg className="block size-full" fill="none" height="9.77606" preserveAspectRatio="none" viewBox="0 0 14.2558 9.77606" width="14.2558">
              <path d={svgPaths.p31ab4800} fill="#878D96" id="path350" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.37%_75.98%_12.9%_20.38%]" data-name="path354">
          <div className="absolute inset-[-15.04%_-11.34%_-12.24%_-14.36%]">
            <svg className="block size-full" fill="none" height="5.80575" preserveAspectRatio="none" viewBox="0 0 6.02436 5.80575" width="6.02436">
              <path d={svgPaths.p22d052c0} fill="#878D96" id="path354" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[84.61%_79.57%_12.58%_18.8%]" data-name="path358">
          <div className="absolute inset-[-14.54%_-26.03%_-14.54%_-36.22%]">
            <svg className="block size-full" fill="none" height="4.43768" preserveAspectRatio="none" viewBox="0 0 3.45606 4.43768" width="3.45606">
              <path d={svgPaths.p3c652180} fill="#878D96" id="path358" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[80.99%_80.84%_17.66%_17.74%]" data-name="path362">
          <div className="absolute inset-[-30.25%_-26.83%_-34.56%_-65.08%]">
            <svg className="block size-full" fill="none" height="2.72387" preserveAspectRatio="none" viewBox="0 0 3.5768 2.72387" width="3.5768">
              <path d={svgPaths.pd203400} fill="#878D96" id="path362" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[73.11%_82.97%_25.16%_15.15%]" data-name="path366">
          <div className="absolute inset-[-23.64%_-32.95%_-23.64%_-20.3%]">
            <svg className="block size-full" fill="none" height="3.1155" preserveAspectRatio="none" viewBox="0 0 3.77445 3.1155" width="3.77445">
              <path d={svgPaths.p1bf3fc0} fill="#878D96" id="path366" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[74.78%_83.17%_23.7%_15.61%]" data-name="path370">
          <div className="absolute inset-[-50.27%_-35.41%_-46.7%_-46.94%]">
            <svg className="block size-full" fill="none" height="3.64618" preserveAspectRatio="none" viewBox="0 0 2.91312 3.64618" width="2.91312">
              <path d={svgPaths.p3fd70a00} fill="#878D96" id="path370" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.19%_83.38%_26.94%_13.53%]" data-name="path374">
          <div className="absolute inset-[-15.54%_-16.55%_-14.27%_-16.95%]">
            <svg className="block size-full" fill="none" height="4.54835" preserveAspectRatio="none" viewBox="0 0 5.42067 4.54835" width="5.42067">
              <path d={svgPaths.p27bbdb80} fill="#878D96" id="path374" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[68.79%_73.54%_29.81%_25.54%]" data-name="path378">
          <div className="absolute inset-[-40.9%_-41.73%_-37.45%_-47.82%]">
            <svg className="block size-full" fill="none" height="3.06549" preserveAspectRatio="none" viewBox="0 0 2.2712 3.06549" width="2.2712">
              <path d={svgPaths.p3ecc2700} fill="#878D96" id="path378" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.28%_76.74%_27.27%_15.76%]" data-name="path382">
          <div className="absolute inset-[-5.77%_-5.45%_-5.74%_-5.08%]">
            <svg className="block size-full" fill="none" height="10.1732" preserveAspectRatio="none" viewBox="0 0 10.8889 10.1732" width="10.8889">
              <g id="path382">
                <path d={svgPaths.p1c84a22a} fill="#878D96" />
                <path d={svgPaths.p1c84a22a} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.87%_85.61%_30.35%_10.09%]" data-name="path386">
          <div className="absolute inset-[-14.23%_-9.8%_-10.94%_-9.5%]">
            <svg className="block size-full" fill="none" height="5.79198" preserveAspectRatio="none" viewBox="0 0 6.74977 5.79198" width="6.74977">
              <path d={svgPaths.p36dddd80} fill="#878D96" id="path386" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[68.74%_88.7%_29.43%_9.07%]" data-name="path390">
          <div className="absolute inset-[-49.55%_-17.07%_-22.25%_-18.55%]">
            <svg className="block size-full" fill="none" height="3.86143" preserveAspectRatio="none" viewBox="0 0 3.97222 3.86143" width="3.97222">
              <path d={svgPaths.p28a95c00} fill="#878D96" id="path390" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[71.49%_89.1%_26.3%_8.72%]" data-name="path394">
          <div className="absolute inset-[-25.04%_-17.47%_-19.01%_-17.47%]">
            <svg className="block size-full" fill="none" height="3.90434" preserveAspectRatio="none" viewBox="0 0 3.86233 3.90434" width="3.86233">
              <path d={svgPaths.p2604e670} fill="#878D96" id="path394" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[71.38%_90.93%_26.3%_7.2%]" data-name="path398">
          <div className="absolute inset-[-27.96%_-20.93%_-17.59%_-21.05%]">
            <svg className="block size-full" fill="none" height="4.13738" preserveAspectRatio="none" viewBox="0 0 3.49688 4.13738" width="3.49688">
              <path d={svgPaths.p11538d00} fill="#878D96" id="path398" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[71.81%_96.4%_26.46%_1.82%]" data-name="path402">
          <div className="absolute inset-[-35.23%_-23.95%_-67.02%_-28.33%]">
            <svg className="block size-full" fill="none" height="4.27845" preserveAspectRatio="none" viewBox="0 0 3.54789 4.27845" width="3.54789">
              <path d={svgPaths.p116e6100} fill="#878D96" id="path402" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[71.49%_96.6%_24.03%_0.51%]" data-name="path406">
          <div className="absolute inset-[-9.11%_-13.18%_-9.73%_-13.18%]">
            <svg className="block size-full" fill="none" height="6.52102" preserveAspectRatio="none" viewBox="0 0 4.79428 6.52102" width="4.79428">
              <path d={svgPaths.p1597ee80} fill="#878D96" id="path406" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.95%_97.77%_30.4%_0]" data-name="path410">
          <div className="absolute inset-[-15.93%_-17.07%_-15.74%_-17.07%]">
            <svg className="block size-full" fill="none" height="4.2652" preserveAspectRatio="none" viewBox="0 0 3.92892 4.2652" width="3.92892">
              <path d={svgPaths.p2db07200} fill="#878D96" id="path410" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[73.97%_75.11%_25.38%_24.33%]" data-name="path1014">
          <div className="absolute inset-[-63.03%_-74.2%_-82.98%_-73.17%]">
            <svg className="block size-full" fill="none" height="1.95154" preserveAspectRatio="none" viewBox="0 0 1.8113 1.95154" width="1.8113">
              <path d={svgPaths.p6663800} fill="#878D96" id="path1014" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[72.03%_76.74%_27%_22.66%]" data-name="path1038">
          <div className="absolute inset-[-59.22%_-62.59%_-42.02%_-71.72%]">
            <svg className="block size-full" fill="none" height="2.39461" preserveAspectRatio="none" viewBox="0 0 1.87176 2.39461" width="1.87176">
              <path d={svgPaths.pcca4900} fill="#878D96" id="path1038" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[28.79%_35.91%_60.3%_55.86%]" data-name="Kalimantan Timur">
        <div className="absolute inset-[-0.46%_-0.42%_-0.45%_-0.7%]">
          <svg className="block size-full" fill="none" height="112.669" preserveAspectRatio="none" viewBox="0 0 119.823 112.669" width="119.823">
            <path d={svgPaths.p341c80} fill="#A2A9B0" id="path1218 2" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute inset-[5.62%_6.8%_91.77%_91.29%]" data-name="path498">
          <div className="absolute inset-[-18.09%_-22.09%_-19.46%_-22.09%]">
            <svg className="block size-full" fill="none" height="4.00085" preserveAspectRatio="none" viewBox="0 0 3.26325 4.00085" width="3.26325">
              <path d={svgPaths.p25d2c00} fill="#A2A9B0" id="path498" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[29.93%_43.47%_58.74%_47.83%]" data-name="Kalimantan Barat">
        <div className="absolute inset-[62.96%_89.37%_35.9%_9.78%]" data-name="path74">
          <div className="absolute inset-[-37.82%_-46.95%_-45.11%_-46.95%]">
            <svg className="block size-full" fill="none" height="2.41861" preserveAspectRatio="none" viewBox="0 0 2.06506 2.41861" width="2.06506">
              <path d={svgPaths.p2c1d4880} fill="#878D96" id="path74" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.67%_90.81%_34.13%_7.65%]" data-name="path78">
          <div className="absolute inset-[-40.83%_-35.9%_-50.76%_-45.59%]">
            <svg className="block size-full" fill="none" height="2.65978" preserveAspectRatio="none" viewBox="0 0 3.50354 2.65978" width="3.50354">
              <path d={svgPaths.p3b843c80} fill="#878D96" id="path78" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[73.16%_98.25%_26.32%_0]" data-name="path82">
          <div className="absolute inset-[-84.04%_-40.05%_-84.68%_-36.48%]">
            <svg className="block size-full" fill="none" height="1.5988" preserveAspectRatio="none" viewBox="0 0 3.87766 1.5988" width="3.87766">
              <path d={svgPaths.p782b500} fill="#878D96" id="path82" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[59.09%_80.02%_34.59%_13.39%]" data-name="path478">
          <div className="absolute inset-[-6.93%_-6.06%_-7.12%_-6.32%]">
            <svg className="block size-full" fill="none" height="8.36931" preserveAspectRatio="none" viewBox="0 0 9.27572 8.36931" width="9.27572">
              <path d={svgPaths.p3e246400} fill="#878D96" id="path478" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.03%_94.85%_27.46%_2.02%]" data-name="path482">
          <div className="absolute inset-[-17.19%_-13.65%_-17.19%_-25.02%]">
            <svg className="block size-full" fill="none" height="3.90879" preserveAspectRatio="none" viewBox="0 0 5.446 3.90879" width="5.446">
              <path d={svgPaths.p7a01e80} fill="#878D96" id="path482" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_0_0_3.03%]" data-name="Vector">
          <div className="absolute inset-[-0.22%_-0.47%_-0.49%_-0.41%]">
            <svg className="block size-full" fill="none" height="116.843" preserveAspectRatio="none" viewBox="0 0 122.549 116.843" width="122.549">
              <path d={svgPaths.p1d989d80} fill="#878D96" id="Vector" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[7.206px] left-[643.47px] top-[489.66px] w-[6.989px]" data-name="DKI Jakarta">
        <div className="absolute inset-[-9.32%_-7.56%_-8.49%_-7.51%]">
          <svg className="block size-full" fill="none" height="8.48885" preserveAspectRatio="none" viewBox="0 0 8.04276 8.48885" width="8.04276">
            <path d={svgPaths.p1f0eaa80} fill="#A2A9B0" id="JK" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.27%_47.48%_47.46%_47.64%]" data-name="Jawa Tengah">
        <div className="absolute inset-[23.87%_0_0_0]" data-name="path1166 3">
          <div className="absolute inset-[-1.24%_-0.82%_-1.22%_-0.74%]">
            <svg className="block size-full" fill="none" height="42.1297" preserveAspectRatio="none" viewBox="0 0 71.3895 42.1297" width="71.3895">
              <g id="path1166 3">
                <path d={svgPaths.p36b08280} fill="#878D96" />
                <path d={svgPaths.p36b08280} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[76.87%_83.71%_18.97%_8.24%]" data-name="path526">
          <div className="absolute inset-[-25.14%_-9.2%_-22.24%_-8.84%]">
            <svg className="block size-full" fill="none" height="3.31287" preserveAspectRatio="none" viewBox="0 0 6.67877 3.31287" width="6.67877">
              <path d={svgPaths.p2b85c400} fill="#878D96" id="path526" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_38.07%_97.92%_60.61%]" data-name="path1054">
          <div className="absolute inset-[-48.48%_-53.65%_-58.57%_-53.65%]">
            <svg className="block size-full" fill="none" height="2.32684" preserveAspectRatio="none" viewBox="0 0 1.93194 2.32684" width="1.93194">
              <path d={svgPaths.p3e84e300} fill="#878D96" id="path1054" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[74.91%_90.72%_24.72%_9%]" data-name="path1166 2">
          <div className="absolute inset-[-252.08%_-250.42%]">
            <svg className="block size-full" fill="none" height="1.19835" preserveAspectRatio="none" viewBox="0 0 1.19967 1.19835" width="1.19967">
              <g id="path1166 2">
                <path d="M0.5 0.698349L0.699668 0.5Z" fill="#878D96" />
                <path d="M0.5 0.698349L0.699668 0.5" stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[47.09%_40.81%_46.23%_51.42%]" data-name="Jawa Timur">
        <div className="absolute inset-[33.24%_25.65%_0_0]" data-name="path1154 1">
          <div className="absolute inset-[-1.59%_-0.6%_-1.11%_-0.71%]">
            <svg className="block size-full" fill="none" height="46.9132" preserveAspectRatio="none" viewBox="0 0 84.233 46.9132" width="84.233">
              <path d={svgPaths.p361c900} fill="#A2A9B0" id="path1154 1" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[88.99%_50.36%_9.18%_46.9%]" data-name="path38">
          <div className="absolute inset-[-61.1%_-16.33%_-39.81%_-39.72%]">
            <svg className="block size-full" fill="none" height="2.52346" preserveAspectRatio="none" viewBox="0 0 4.77824 2.52346" width="4.77824">
              <path d={svgPaths.p1cfae200} fill="#A2A9B0" id="path38" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_63.87%_96.04%_32.92%]" data-name="path530">
          <div className="absolute inset-[-18.45%_-13.91%_-18.45%_-16.96%]">
            <svg className="block size-full" fill="none" height="3.71045" preserveAspectRatio="none" viewBox="0 0 4.70421 3.71045" width="4.70421">
              <path d={svgPaths.p21013780} fill="#A2A9B0" id="path530" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[36.43%_6.61%_57.97%_86.19%]" data-name="path534">
          <div className="absolute inset-[-13.04%_-6.21%_-13.04%_-6.47%]">
            <svg className="block size-full" fill="none" height="4.83433" preserveAspectRatio="none" viewBox="0 0 9.07606 4.83433" width="9.07606">
              <g id="path534">
                <path d={svgPaths.p34f39800} fill="#A2A9B0" />
                <path d={svgPaths.p34f39800} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.29%_36.07%_49.95%_34.94%]" data-name="path906">
          <div className="absolute inset-[-5.82%_-1.73%_-6.57%_-1.54%]">
            <svg className="block size-full" fill="none" height="9.80677" preserveAspectRatio="none" viewBox="0 0 33.4784 9.80677" width="33.4784">
              <path d={svgPaths.p339682f0} fill="#A2A9B0" id="path906" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[43.67%_30.06%_52.17%_67.68%]" data-name="path910">
          <div className="absolute inset-[-17.93%_-20.71%_-17.59%_-19.97%]">
            <svg className="block size-full" fill="none" height="3.85246" preserveAspectRatio="none" viewBox="0 0 3.55853 3.85246" width="3.55853">
              <path d={svgPaths.p22683700} fill="#A2A9B0" id="path910" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.7%_25.89%_52.66%_71.55%]" data-name="path914">
          <div className="absolute inset-[-44.49%_-17.47%_-49.08%_-17.47%]">
            <svg className="block size-full" fill="none" height="2.17543" preserveAspectRatio="none" viewBox="0 0 3.86233 2.17543" width="3.86233">
              <path d={svgPaths.p12d38300} fill="#A2A9B0" id="path914" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.31%_0_51.69%_96.96%]" data-name="path1034">
          <div className="absolute inset-[-24.4%_-27.9%_-25.13%_-18.41%]">
            <svg className="block size-full" fill="none" height="3.06444" preserveAspectRatio="none" viewBox="0 0 4.96703 3.06444" width="4.96703">
              <g id="path1034">
                <path d={svgPaths.p33ec0880} fill="#A2A9B0" />
                <path d={svgPaths.p33ec0880} stroke="white" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[42.376px] left-[637px] top-[487px] w-[57.18px]" data-name="Jawa Barat">
        <div className="absolute inset-[-1.2%_-0.87%_-1.2%_-0.91%]">
          <svg className="block size-full" fill="none" height="43.3913" preserveAspectRatio="none" viewBox="0 0 58.2008 43.3913" width="58.2008">
            <path d={svgPaths.p13ce4300} fill="#878D96" id="JB" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.45%_55.19%_50.13%_42.22%]" data-name="Banten">
        <div className="absolute inset-[57.6%_90.93%_28.27%_0]" data-name="path318">
          <div className="absolute inset-[-14.27%_-16.14%_-18.79%_-15.47%]">
            <svg className="block size-full" fill="none" height="4.66203" preserveAspectRatio="none" viewBox="0 0 4.46807 4.66203" width="4.46807">
              <path d={svgPaths.pa7b3c00} fill="#878D96" id="path318" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_0_0_6.41%]" data-name="path1174 2">
          <div className="absolute inset-[-2.05%_-1.61%_-2.03%_-1.81%]">
            <svg className="block size-full" fill="none" height="25.8019" preserveAspectRatio="none" viewBox="0 0 36.2102 25.8019" width="36.2102">
              <path d={svgPaths.p2611d400} fill="#878D96" id="path1174 2" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[46.474px] left-[517.52px] top-[370.07px] w-[77.284px]" data-name="Jambi">
        <div className="absolute inset-[-1.65%_-0.75%_-1.52%_-0.67%]">
          <svg className="block size-full" fill="none" height="47.9472" preserveAspectRatio="none" viewBox="0 0 78.3834 47.9472" width="78.3834">
            <path d={svgPaths.p367d7600} fill="#A2A9B0" id="JA" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[16.329px] left-[971.51px] top-[330.01px] w-[53.12px]" data-name="Gorontalo">
        <div className="absolute inset-[-3.06%_-0.95%_-3.09%_-1.68%]">
          <svg className="block size-full" fill="none" height="17.3331" preserveAspectRatio="none" viewBox="0 0 54.516 17.3331" width="54.516">
            <path d={svgPaths.p61c6d80} fill="#A2A9B0" id="GO" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[39.41%_59.89%_53.39%_35.78%]" data-name="Bengkulu">
        <div className="absolute inset-[0_0_18.12%_0]" data-name="Bengkulu">
          <div className="absolute inset-[-0.83%_-0.94%_-0.95%_-1.17%]">
            <svg className="block size-full" fill="none" height="61.4298" preserveAspectRatio="none" viewBox="0 0 63.6898 61.4298" width="63.6898">
              <path d={svgPaths.p30bd0480} fill="#C1C7CD" id="Bengkulu" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[93.27%_49.73%_0_39.17%]" data-name="path306">
          <div className="absolute inset-[-10.26%_-9.47%_-16.95%_-13.19%]">
            <svg className="block size-full" fill="none" height="6.30753" preserveAspectRatio="none" viewBox="0 0 8.49133 6.30753" width="8.49133">
              <path d={svgPaths.pca4a80} fill="#C1C7CD" id="path306" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[37.75%_52.77%_58.35%_42.24%]" data-name="Bangka Belitung">
        <div className="absolute inset-[79.64%_43.76%_12.75%_50.23%]" data-name="path322">
          <div className="absolute inset-[-17.3%_-12.15%_-18.19%_-11.56%]">
            <svg className="block size-full" fill="none" height="4.12018" preserveAspectRatio="none" viewBox="0 0 5.35255 4.12018" width="5.35255">
              <path d={svgPaths.p78bdfc0} fill="#C1C7CD" id="path322" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[75.83%_37.28%_19.04%_60.41%]" data-name="path326">
          <div className="absolute inset-[-24.4%_-35.41%_-25.76%_-30.65%]">
            <svg className="block size-full" fill="none" height="3.07723" preserveAspectRatio="none" viewBox="0 0 2.76355 3.07723" width="2.76355">
              <path d={svgPaths.p31bc2280} fill="#C1C7CD" id="path326" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_46.16%_7.78%_0]" data-name="path330">
          <div className="absolute inset-[-1.36%_-1.29%_-1.52%_-1.3%]">
            <svg className="block size-full" fill="none" height="37.882" preserveAspectRatio="none" viewBox="0 0 39.7467 37.882" width="39.7467">
              <path d={svgPaths.pc88f780} fill="#C1C7CD" id="path330" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[75.5%_25.25%_18.21%_70.4%]" data-name="path334">
          <div className="absolute inset-[-21.54%_-16.96%_-22.74%_-19.52%]">
            <svg className="block size-full" fill="none" height="3.62451" preserveAspectRatio="none" viewBox="0 0 4.27004 3.62451" width="4.27004">
              <path d={svgPaths.p1fd16080} fill="#C1C7CD" id="path334" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[59.44%_0_0_76.41%]" data-name="path338">
          <div className="absolute inset-[-4.03%_-3.38%_-3.09%_-3.2%]">
            <svg className="block size-full" fill="none" height="17.3489" preserveAspectRatio="none" viewBox="0 0 18.0911 17.3489" width="18.0911">
              <path d={svgPaths.p43867c0} fill="#C1C7CD" id="path338" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[52.2%_41.09%_46.05%_56.91%]" data-name="Bali">
        <div className="absolute inset-[76.75%_8.31%_5.54%_80.14%]" data-name="path538">
          <div className="absolute inset-[-15.76%_-15.37%_-18%_-15.02%]">
            <svg className="block size-full" fill="none" height="4.24437" preserveAspectRatio="none" viewBox="0 0 4.34012 4.24437" width="4.34012">
              <path d={svgPaths.p166c1200} fill="#A2A9B0" id="path538" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[-2.79%_-1.89%_-2.81%_-1.76%]">
          <svg className="block size-full" fill="none" height="18.9193" preserveAspectRatio="none" viewBox="0 0 29.8742 18.9193" width="29.8742">
            <path d={svgPaths.p17a8cb00} fill="#A2A9B0" id="path542" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[21.51%_68.53%_69.93%_26.32%]" data-name="Nangroe Aceh Darussalam">
        <div className="absolute inset-[6.57%_0_4.38%_5.66%]" data-name="Aceh">
          <div className="absolute inset-[-0.65%_-0.72%_-1.21%_-1.04%]">
            <svg className="block size-full" fill="none" height="79.4553" preserveAspectRatio="none" viewBox="0 0 71.1922 79.4553" width="71.1922">
              <path d={svgPaths.p3724a00} fill="#878D96" id="Aceh" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[6.19%_94.52%_91.92%_3.05%]" data-name="path246">
          <div className="absolute inset-[-47.12%_-60.48%_-49.19%_-27.82%]">
            <svg className="block size-full" fill="none" height="3.24451" preserveAspectRatio="none" viewBox="0 0 3.38423 3.24451" width="3.38423">
              <path d={svgPaths.p3e5d7780} fill="#878D96" id="path246" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[3.92%_96.23%_93.58%_0]" data-name="path250">
          <div className="absolute inset-[-23.33%_-19.83%_-38.89%_-17.88%]">
            <svg className="block size-full" fill="none" height="3.53896" preserveAspectRatio="none" viewBox="0 0 3.85018 3.53896" width="3.85018">
              <path d={svgPaths.pa069300} fill="#878D96" id="path250" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_88.69%_96.75%_6.19%]" data-name="path254">
          <div className="absolute inset-[-17.59%_-13.18%]">
            <svg className="block size-full" fill="none" height="3.84267" preserveAspectRatio="none" viewBox="0 0 4.79428 3.84267" width="4.79428">
              <path d={svgPaths.p3c04f680} fill="#878D96" id="path254" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[76.53%_54.76%_7.85%_21.1%]" data-name="path258">
          <div className="absolute inset-[-7.11%_-2.79%_-3.65%_-2.79%]">
            <svg className="block size-full" fill="none" height="15.1579" preserveAspectRatio="none" viewBox="0 0 18.9064 15.1579" width="18.9064">
              <path d={svgPaths.p31bc8300} fill="#878D96" id="path258" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[97.13%_49.28%_1.36%_48.92%]" data-name="path262">
          <div className="absolute inset-[-37.82%_-37.56%_-40.08%_-37.56%]">
            <svg className="block size-full" fill="none" height="2.35212" preserveAspectRatio="none" viewBox="0 0 2.33133 2.35212" width="2.33133">
              <path d={svgPaths.p2dd1cc80} fill="#878D96" id="path262" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[97.51%_34.56%_0_62.84%]" data-name="path266">
          <div className="absolute inset-[-24.02%_-28.83%_-22.92%_-40.48%]">
            <svg className="block size-full" fill="none" height="3.20555" preserveAspectRatio="none" viewBox="0 0 3.26844 3.20555" width="3.26844">
              <path d={svgPaths.p35d57000} fill="#878D96" id="path266" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[94.49%_28.73%_0.15%_64.18%]" data-name="path270">
          <div className="absolute inset-[-10.65%_-9.51%_-14.75%_-12.03%]">
            <svg className="block size-full" fill="none" height="5.8859" preserveAspectRatio="none" viewBox="0 0 6.39117 5.8859" width="6.39117">
              <path d={svgPaths.p3778c7f0} fill="#878D96" id="path270" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Frame">
      <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[0px] text-center whitespace-nowrap">
        <p className="leading-[normal] mb-0 text-[16px]">Provinsi</p>
        <p className="leading-[normal] text-[12px]">Cluster 1 (Tinggi)</p>
      </div>
    </div>
  );
}

function LegendRow() {
  return (
    <div className="absolute h-[34px] left-[458px] top-[829px] w-[99px]" data-name="legend-row">
      <Frame />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[426px] top-[574px]">
      <div className="absolute h-[38px] left-[426px] rounded-bl-[6px] rounded-br-[6px] top-[574px] w-[37px]" data-name="Controls / Zoom Controls">
        <div className="absolute bg-[#878d96] inset-0 rounded-bl-[6px] rounded-br-[6px]" data-name="Rectangle" />
      </div>
      <div className="absolute left-[434px] size-[22px] top-[582px]" data-name="icons8-full-screen-100 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcons8FullScreen1001} />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[426px] top-[504px]">
      <ControlsZoomControls className="absolute h-[70px] left-[426px] rounded-tl-[15px] rounded-tr-[15px] top-[504px] w-[37px]" />
      <Group5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[426px] top-[504px]">
      <Group4 />
      <div className="absolute bg-[rgba(230,230,230,0.5)] inset-[55.96%_68.21%_43.91%_29.95%]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Frame">
      <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[0px] text-center whitespace-nowrap">
        <p className="leading-[normal] mb-0 text-[16px]">Provinsi</p>
        <p className="leading-[normal] text-[12px]">Cluster 2 (Sedang)</p>
      </div>
    </div>
  );
}

function LegendRow1() {
  return (
    <div className="absolute h-[34px] left-[642px] top-[829px] w-[99px]" data-name="legend-row">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Frame">
      <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[0px] text-center whitespace-nowrap">
        <p className="leading-[normal] mb-0 text-[16px]">Provinsi</p>
        <p className="leading-[normal] text-[12px]">Cluster 3 (Rendah)</p>
      </div>
    </div>
  );
}

function LegendRow2() {
  return (
    <div className="absolute h-[34px] left-[827px] top-[829px] w-[99px]" data-name="legend-row">
      <Frame2 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[625px] top-[107px]">
      <div className="absolute bg-[#d9d9d9] h-[46px] left-[625px] rounded-[15px] top-[107px] w-[517px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[637px] not-italic text-[#0f172a] text-[14px] top-[122px] whitespace-nowrap">Cluster</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center ml-0 mt-0 relative row-1" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#A2A9B0" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Cluster 1 (Tinggi)</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center ml-[138px] mt-0 relative row-1" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#C1C7CD" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Cluster 2 (Sedang)</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center ml-[286px] mt-0 relative row-1" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#878D96" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Cluster 3 (Rendah)</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function LegendRow3() {
  return (
    <div className="absolute content-stretch flex items-center left-[706px] top-[122px]" data-name="legend-row">
      <Group8 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[625px] top-[107px]">
      <Group7 />
      <LegendRow3 />
    </div>
  );
}

export default function PetaCluster() {
  return (
    <div className="bg-white relative size-full" data-name="Peta Cluster">
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
      <LoFiUxSideMenuSection className="absolute left-[16px] rounded-[5px] size-[48px] top-[292px]" type="Icon Only" />
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
      <LoFiUxSideMenuSection className="absolute h-[48px] left-[82px] top-[292px] w-[280px]" showTagNotification={false} showTrilingIcon={false} />
      <ParagraphContainer2 />
      <Date />
      <Date1 />
      <Date2 />
      <div className="absolute bg-[#d9d9d9] h-[530px] left-[377px] rounded-[15px] top-[121px] w-[1043px]" />
      <Provinces />
      <div className="absolute bg-[#d9d9d9] h-[287px] left-[377px] rounded-[15px] top-[665px] w-[626px]" />
      <div className="absolute bg-[#d9d9d9] h-[287px] left-[1018px] rounded-[15px] top-[665px] w-[402px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[424px] not-italic overflow-hidden text-[#0f172a] text-[16px] text-ellipsis top-[699px] w-[88px] whitespace-nowrap">Ringkasan</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1063px] not-italic overflow-hidden text-[#0f172a] text-[16px] text-ellipsis top-[699px] w-[102px] whitespace-nowrap">Keterangan</p>
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[177px] leading-[0] left-[1063px] not-italic overflow-hidden text-[#0f172a] text-[12px] text-ellipsis text-justify top-[731px] w-[331px]">
        <p className="leading-[normal] mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="leading-[normal]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[164px] left-[426px] rounded-[15px] shadow-[2px_1px_8px_0px_rgba(0,0,0,0.25)] top-[747px] w-[163px]" />
      <LegendRow />
      <div className="absolute bg-[#d9d9d9] h-[164px] left-[611px] rounded-[15px] shadow-[2px_1px_8px_0px_rgba(0,0,0,0.25)] top-[747px] w-[162px]" />
      <div className="absolute bg-[#d9d9d9] h-[164px] left-[795px] rounded-[15px] shadow-[2px_1px_8px_0px_rgba(0,0,0,0.25)] top-[747px] w-[163px]" />
      <Group3 />
      <LegendRow1 />
      <LegendRow2 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[508px] not-italic text-[#a2a9b0] text-[32px] text-center top-[788px] whitespace-nowrap">12</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[692.5px] not-italic text-[#c1c7cd] text-[32px] text-center top-[788px] whitespace-nowrap">16</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[877px] not-italic text-[#878d96] text-[32px] text-center top-[788px] whitespace-nowrap">10</p>
      <Group6 />
    </div>
  );
}