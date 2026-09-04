import svgPaths from "./svg-5xnxfry489";
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
      <LoFiUxSideMenuSection className="relative rounded-[5px] shrink-0 size-[48px]" type="Icon Only" />
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

function Text2() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Text">
      <div className="absolute bg-[#7c8b9d] inset-[0_15.08%_0_0] rounded-[50px]" data-name="Text" />
    </div>
  );
}

function ParagraphContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Paragraph container">
      <div className="relative shrink-0 w-full" data-name=".Lo-fi Text">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
          <Text2 />
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
            <ParagraphContainer2 />
            <div className="absolute bg-[#7c8b9d] bottom-0 left-0 top-0 w-[3px]" />
          </div>
        </div>
      </div>
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

function Text3() {
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
          <Text3 />
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

function Text4() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Text">
      <div className="absolute bg-[#7c8b9d] inset-[0_15.08%_0_0] rounded-[50px]" data-name="Text" />
    </div>
  );
}

function ParagraphContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mb-[-2px] relative shrink-0 w-full" data-name="Paragraph container">
      <div className="relative shrink-0 w-full" data-name=".Lo-fi Text">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Text">
      <div className="absolute bg-[#d1d9e2] inset-[0_15.08%_0_0] rounded-[50px]" data-name="Text" />
    </div>
  );
}

function ParagraphContainer3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[380px] top-[34px] w-[190px]" data-name="Paragraph container">
      <ParagraphContainer4 />
      <div className="relative shrink-0 w-full" data-name=".Lo-fi Text">
        <div className="content-stretch flex flex-col gap-[6px] items-start py-[7px] relative size-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="bg-white content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="status-badge">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] uppercase whitespace-nowrap">Medium Cluster</p>
    </div>
  );
}

function ChartPie() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chart-pie">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_528)" id="chart-pie">
          <path d={svgPaths.p3764d640} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_528">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="badge-row">
      <StatusBadge />
      <ChartPie />
    </div>
  );
}

function TitleGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="title-group">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[22px] w-full">Cluster Sedang</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#64748b] text-[13px] w-full">Provinsi dengan indeks sedang</p>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="header-section">
      <BadgeRow />
      <TitleGroup />
    </div>
  );
}

function StatsRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="stats-row">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0f172a] text-[16px]">16 Provinsi Terpilih</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[#1a1a1a] text-[28px]">55%</p>
    </div>
  );
}

function ProgressBarTrack() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-[10px] items-start overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="progress-bar-track">
      <div className="bg-[#d1d5db] h-full relative rounded-[5px] shrink-0 w-[152px]" data-name="progress-fill" />
    </div>
  );
}

function MetricsBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="metrics-block">
      <StatsRow />
      <ProgressBarTrack />
    </div>
  );
}

function ListHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-italic relative shrink-0 text-[#64748b] w-full whitespace-nowrap" data-name="list-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[12px] uppercase">Daftar Provinsi</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[11px]">Berdasarkan Indeks</p>
    </div>
  );
}

function IndexBadge() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">1</p>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Sumatera Utara</p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent />
      <MapPin />
    </div>
  );
}

function IndexBadge1() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">2</p>
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Sulawesi Selatan</p>
    </div>
  );
}

function MapPin1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent1 />
      <MapPin1 />
    </div>
  );
}

function IndexBadge2() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">3</p>
    </div>
  );
}

function LeftContent2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge2 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Bali</p>
    </div>
  );
}

function MapPin2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent2 />
      <MapPin2 />
    </div>
  );
}

function IndexBadge3() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">4</p>
    </div>
  );
}

function LeftContent3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge3 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Kalimantan Timur</p>
    </div>
  );
}

function MapPin3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow3() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent3 />
      <MapPin3 />
    </div>
  );
}

function IndexBadge4() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">5</p>
    </div>
  );
}

function LeftContent4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge4 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Riau</p>
    </div>
  );
}

function MapPin4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent4 />
      <MapPin4 />
    </div>
  );
}

function IndexBadge5() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">6</p>
    </div>
  );
}

function LeftContent5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge5 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Lampung</p>
    </div>
  );
}

function MapPin5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow5() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent5 />
      <MapPin5 />
    </div>
  );
}

function ProvinceList() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px py-[8px] relative w-full" data-name="province-list">
      <ProvinceRow />
      <ProvinceRow1 />
      <ProvinceRow2 />
      <ProvinceRow3 />
      <ProvinceRow4 />
      <ProvinceRow5 />
    </div>
  );
}

function CardBody() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px p-[24px] relative w-full" data-name="card-body">
      <HeaderSection />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 292 1" width="292">
            <line id="divider" stroke="#F1F5F9" x2="292" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <MetricsBlock />
      <ListHeader />
      <ProvinceList />
      <div className="bg-[rgba(0,0,0,0)] h-[764px] mix-blend-saturation relative shrink-0 w-[340px]" data-name="Grayscale filter" />
    </div>
  );
}

function ClusterCard() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[770px] left-[728px] rounded-[15px] top-[204px] w-[340px]" data-name="cluster-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[6px] relative shrink-0 w-full" data-name="top-stripe">
          <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 340 6" width="340">
            <path d="M0 0H340V6H0V0Z" fill="#E5E7EB" id="top-stripe" />
          </svg>
        </div>
        <CardBody />
        <div className="bg-[rgba(0,0,0,0)] h-[770px] mix-blend-saturation relative shrink-0 w-[340px]" data-name="Grayscale filter" />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="bg-white content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="status-badge">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] uppercase whitespace-nowrap">High Cluster</p>
    </div>
  );
}

function ChartPie1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chart-pie">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_528)" id="chart-pie">
          <path d={svgPaths.p3764d640} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_528">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="badge-row">
      <StatusBadge1 />
      <ChartPie1 />
    </div>
  );
}

function TitleGroup1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="title-group">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[22px] w-full">Cluster Tinggi</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#64748b] text-[13px] w-full">Provinsi dengan indeks tinggi</p>
    </div>
  );
}

function HeaderSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="header-section">
      <BadgeRow1 />
      <TitleGroup1 />
    </div>
  );
}

function StatsRow1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="stats-row">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0f172a] text-[16px]">12 Provinsi Terpilih</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[28px] text-black">85%</p>
    </div>
  );
}

function ProgressBarTrack1() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-[10px] items-start overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="progress-bar-track">
      <div className="bg-[#d1d5db] h-full relative rounded-[5px] shrink-0 w-[235px]" data-name="progress-fill" />
    </div>
  );
}

function MetricsBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="metrics-block">
      <StatsRow1 />
      <ProgressBarTrack1 />
    </div>
  );
}

function ListHeader1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-italic relative shrink-0 text-[#64748b] w-full whitespace-nowrap" data-name="list-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[12px] uppercase">Daftar Provinsi</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[11px]">Berdasarkan Indeks</p>
    </div>
  );
}

function IndexBadge6() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">1</p>
    </div>
  );
}

function LeftContent6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge6 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">DKI Jakarta</p>
    </div>
  );
}

function MapPin6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent6 />
      <MapPin6 />
    </div>
  );
}

function IndexBadge7() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">2</p>
    </div>
  );
}

function LeftContent7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge7 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Jawa Barat</p>
    </div>
  );
}

function MapPin7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow7() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent7 />
      <MapPin7 />
    </div>
  );
}

function IndexBadge8() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">3</p>
    </div>
  );
}

function LeftContent8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge8 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Jawa Timur</p>
    </div>
  );
}

function MapPin8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent8 />
      <MapPin8 />
    </div>
  );
}

function IndexBadge9() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">4</p>
    </div>
  );
}

function LeftContent9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge9 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Jawa Tengah</p>
    </div>
  );
}

function MapPin9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow9() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent9 />
      <MapPin9 />
    </div>
  );
}

function IndexBadge10() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">5</p>
    </div>
  );
}

function LeftContent10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge10 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Banten</p>
    </div>
  );
}

function MapPin10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow10() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent10 />
      <MapPin10 />
    </div>
  );
}

function ProvinceList1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px py-[8px] relative w-full" data-name="province-list">
      <ProvinceRow6 />
      <ProvinceRow7 />
      <ProvinceRow8 />
      <ProvinceRow9 />
      <ProvinceRow10 />
    </div>
  );
}

function CardBody1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px p-[24px] relative w-full" data-name="card-body">
      <HeaderSection1 />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 292 1" width="292">
            <line id="divider" stroke="#F1F5F9" x2="292" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <MetricsBlock1 />
      <ListHeader1 />
      <ProvinceList1 />
    </div>
  );
}

function ClusterCard1() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[770px] left-[380px] rounded-[15px] top-[204px] w-[340px]" data-name="cluster-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#e5e7eb] h-[6px] relative shrink-0 w-full" data-name="top-stripe" />
        <CardBody1 />
        <div className="bg-[rgba(0,0,0,0)] h-[770px] mix-blend-saturation relative shrink-0 w-[340px]" data-name="Grayscale filter" />
        <div className="bg-[rgba(0,0,0,0)] h-[770px] mix-blend-saturation relative shrink-0 w-[340px]" data-name="Grayscale filter" />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_4px_20px_0px_rgba(15,23,42,0.05)]" />
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="bg-white content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="status-badge">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] uppercase whitespace-nowrap">Low Cluster</p>
    </div>
  );
}

function ChartPie2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chart-pie">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_528)" id="chart-pie">
          <path d={svgPaths.p3764d640} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_528">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeRow2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="badge-row">
      <StatusBadge2 />
      <ChartPie2 />
    </div>
  );
}

function TitleGroup2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="title-group">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[22px] w-full">Cluster Rendah</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#64748b] text-[13px] w-full">Provinsi dengan indeks rendah</p>
    </div>
  );
}

function HeaderSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="header-section">
      <BadgeRow2 />
      <TitleGroup2 />
    </div>
  );
}

function StatsRow2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="stats-row">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0f172a] text-[16px]">10 Provinsi Terpilih</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[#1a1a1a] text-[28px]">25%</p>
    </div>
  );
}

function ProgressBarTrack2() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-[10px] items-start overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="progress-bar-track">
      <div className="bg-[#d1d5db] h-full relative rounded-[5px] shrink-0 w-[69px]" data-name="progress-fill" />
    </div>
  );
}

function MetricsBlock2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="metrics-block">
      <StatsRow2 />
      <ProgressBarTrack2 />
    </div>
  );
}

function ListHeader2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-italic relative shrink-0 text-[#64748b] w-full whitespace-nowrap" data-name="list-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[12px] uppercase">Daftar Provinsi</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[11px]">Berdasarkan Indeks</p>
    </div>
  );
}

function IndexBadge11() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">1</p>
    </div>
  );
}

function LeftContent11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge11 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Papua</p>
    </div>
  );
}

function MapPin11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent11 />
      <MapPin11 />
    </div>
  );
}

function IndexBadge12() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">2</p>
    </div>
  );
}

function LeftContent12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge12 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Maluku</p>
    </div>
  );
}

function MapPin12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow12() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent12 />
      <MapPin12 />
    </div>
  );
}

function IndexBadge13() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">3</p>
    </div>
  );
}

function LeftContent13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge13 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">NTT</p>
    </div>
  );
}

function MapPin13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow13() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent13 />
      <MapPin13 />
    </div>
  );
}

function IndexBadge14() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">4</p>
    </div>
  );
}

function LeftContent14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge14 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Sulawesi Barat</p>
    </div>
  );
}

function MapPin14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow14() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent14 />
      <MapPin14 />
    </div>
  );
}

function IndexBadge15() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">5</p>
    </div>
  );
}

function LeftContent15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge15 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Gorontalo</p>
    </div>
  );
}

function MapPin15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow15() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent15 />
      <MapPin15 />
    </div>
  );
}

function IndexBadge16() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">6</p>
    </div>
  );
}

function LeftContent16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge16 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Kalimantan Utara</p>
    </div>
  );
}

function MapPin16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow16() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent16 />
      <MapPin16 />
    </div>
  );
}

function IndexBadge17() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="index-badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">7</p>
    </div>
  );
}

function LeftContent17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left-content">
      <IndexBadge17 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Papua Barat</p>
    </div>
  );
}

function MapPin17() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProvinceRow17() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="province-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LeftContent17 />
      <MapPin17 />
    </div>
  );
}

function ProvinceList2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px py-[8px] relative w-full" data-name="province-list">
      <ProvinceRow11 />
      <ProvinceRow12 />
      <ProvinceRow13 />
      <ProvinceRow14 />
      <ProvinceRow15 />
      <ProvinceRow16 />
      <ProvinceRow17 />
    </div>
  );
}

function CardBody2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[616px] items-start p-[24px] relative shrink-0 w-full" data-name="card-body">
      <HeaderSection2 />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 292 1" width="292">
            <line id="divider" stroke="#F1F5F9" x2="292" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <MetricsBlock2 />
      <ListHeader2 />
      <ProvinceList2 />
      <div className="bg-[rgba(0,0,0,0)] h-[296px] mix-blend-saturation relative shrink-0 w-[340px]" data-name="Grayscale filter" />
    </div>
  );
}

function ClusterCard2() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[770px] left-[1076px] rounded-[15px] top-[204px] w-[340px]" data-name="cluster-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#e5e7eb] h-[6px] relative shrink-0 w-full" data-name="top-stripe" />
        <CardBody2 />
        <div className="bg-[rgba(0,0,0,0)] h-[770px] mix-blend-saturation relative shrink-0 w-[340px]" data-name="Grayscale filter" />
        <div className="bg-[rgba(0,0,0,0)] h-[770px] mix-blend-saturation relative shrink-0 w-[340px]" data-name="Grayscale filter" />
        <div className="bg-[rgba(0,0,0,0)] h-[770px] mix-blend-saturation relative shrink-0 w-[340px]" data-name="Grayscale filter" />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_4px_20px_0px_rgba(15,23,42,0.05)]" />
    </div>
  );
}

export default function ProfileCluster() {
  return (
    <div className="bg-white relative size-full" data-name="Profile Cluster">
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
      <ParagraphContainer3 />
      <div className="absolute bg-[#d9d9d9] left-[380px] rounded-[15px] top-[112px]" data-name="OptionSwitcher">
        <div className="content-stretch flex gap-[3px] items-start px-[6px] py-[3px] relative size-full">
          <button className="cursor-pointer relative rounded-[52px] shrink-0" data-name="Option">
            <div className="content-stretch flex items-start px-[20px] py-[10px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-left whitespace-nowrap">Ringkasan</p>
            </div>
          </button>
          <button className="cursor-pointer relative rounded-[52px] shrink-0" data-name="Option">
            <div className="content-stretch flex items-start px-[20px] py-[10px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-left whitespace-nowrap">Perbandingan</p>
            </div>
          </button>
          <div className="bg-[#2a282f] drop-shadow-[0px_4px_9.5px_rgba(42,40,47,0.49)] relative rounded-[52px] shrink-0" data-name="Option">
            <div className="content-stretch flex items-start px-[20px] py-[10px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Provinsi Anggota</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[770px] left-[380px] rounded-[15px] top-[204px] w-[338px]" />
      <div className="absolute bg-[#d9d9d9] h-[770px] left-[728px] rounded-[15px] top-[204px] w-[339px]" />
      <div className="absolute bg-[#d9d9d9] h-[770px] left-[1077px] rounded-[15px] top-[204px] w-[338px]" />
      <ClusterCard />
      <ClusterCard1 />
      <ClusterCard2 />
    </div>
  );
}