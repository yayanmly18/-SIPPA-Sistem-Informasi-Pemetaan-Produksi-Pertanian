import svgPaths from "./svg-yvdr6hwmr3";
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

function Tag() {
  return (
    <div className="bg-[#2a282f] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Cluster 1 (Tinggi)</p>
    </div>
  );
}

function VertCard() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex flex-col gap-[17px] h-[237px] items-start left-[380px] px-[16px] py-[24px] rounded-[15px] top-[192px] w-[334px]" data-name="vert-card">
      <Tag />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#2a282f] text-[24px] tracking-[-0.96px] w-[min-content]">Sentra Produksi Tanaman Pangan Utama</p>
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#625f68] text-[16px] text-justify tracking-[-0.64px] w-[min-content]">12 Provinsi dengan produksi, luas panen, dan produktivitas tinggi yang menjadi pusat utama pertanian tanaman pangan.</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#2a282f] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Cluster 2 (Sedang)</p>
    </div>
  );
}

function VertCard1() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex flex-col gap-[16px] items-start left-[731px] px-[16px] py-[24px] rounded-[15px] top-[191.5px] w-[333px]" data-name="vert-card">
      <Tag1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#2a282f] text-[24px] tracking-[-0.96px] w-[min-content]">Wilayah dengan Potensi Produksi Berkembang</p>
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#625f68] text-[16px] text-justify tracking-[-0.64px] w-[min-content]">16 Provinsi dengan tingkat produksi dan produktivitas sedang serta memiliki potensi untuk meningkatkan hasil pertanian.</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#2a282f] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Cluster 3 (Rendah)</p>
    </div>
  );
}

function VertCard2() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex flex-col gap-[16px] items-start left-[1081px] px-[16px] py-[24px] rounded-[15px] top-[191.5px] w-[334px]" data-name="vert-card">
      <Tag2 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#2a282f] text-[24px] tracking-[-0.96px] w-[min-content]">Wilayah dengan Produksi Pertanian Terbatas</p>
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#625f68] text-[16px] text-justify tracking-[-0.64px] w-[min-content]">10 Provinsi dengan produksi dan produktivitas rendah yang memerlukan perhatian untuk pengembangan sektor pertanian.</p>
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
      <VertCard />
      <div className="absolute bg-[#d9d9d9] left-[380px] rounded-[15px] top-[112px]" data-name="OptionSwitcher">
        <div className="content-stretch flex gap-[3px] items-start px-[6px] py-[3px] relative size-full">
          <div className="bg-[#2a282f] drop-shadow-[0px_4px_9.5px_rgba(42,40,47,0.49)] relative rounded-[52px] shrink-0" data-name="Option">
            <div className="content-stretch flex items-start px-[20px] py-[10px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Ringkasan</p>
            </div>
          </div>
          <button className="cursor-pointer relative rounded-[52px] shrink-0" data-name="Option">
            <div className="content-stretch flex items-start px-[20px] py-[10px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-left whitespace-nowrap">Perbandingan</p>
            </div>
          </button>
          <button className="cursor-pointer relative rounded-[52px] shrink-0" data-name="Option">
            <div className="content-stretch flex items-start px-[20px] py-[10px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-left whitespace-nowrap">Provinsi Anggota</p>
            </div>
          </button>
        </div>
      </div>
      <VertCard1 />
      <VertCard2 />
    </div>
  );
}