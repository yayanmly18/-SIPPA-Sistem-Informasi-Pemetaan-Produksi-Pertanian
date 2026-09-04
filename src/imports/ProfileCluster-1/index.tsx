import svgPaths from "./svg-gphqyid422";
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

function Group27() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[406px] not-italic text-[12px] text-black top-[728.93px] uppercase">
      <p className="absolute h-[19px] left-[406px] top-[728.93px] w-[89px]">Cluster</p>
      <p className="absolute h-[19px] left-[525px] top-[728.93px] w-[150px]">jumlah provinsi</p>
      <p className="absolute h-[19px] left-[701px] top-[728.93px] w-[149px]">Produksi (juta ton)</p>
      <p className="absolute h-[19px] left-[877px] top-[728.93px] w-[150px]">Luas panen (juta ha)</p>
      <p className="absolute h-[19px] left-[1054px] top-[729px] w-[176px]">produktivitas (ton/ha)</p>
      <p className="absolute h-[19px] left-[1230px] top-[728.93px] w-[150px]">komoditas dominan</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="[word-break:break-word] absolute capitalize contents font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[406px] not-italic text-[14px] text-black top-[773px]">
      <p className="absolute h-[18.854px] left-[406px] top-[773px] w-[84.324px]">Cluster 1</p>
      <p className="absolute h-[18.854px] left-[524.67px] top-[773px] w-[141.961px]">12</p>
      <p className="absolute h-[18.854px] left-[701.01px] top-[773px] w-[141.961px]">5,3</p>
      <p className="absolute h-[18.854px] left-[877.35px] top-[773px] w-[141.961px]">1,17</p>
      <p className="absolute h-[18.854px] left-[1053.7px] top-[773px] w-[141.961px]">3,40</p>
      <p className="absolute h-[18.854px] left-[1230.04px] top-[773px] w-[141.961px]">Padi</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="[word-break:break-word] absolute capitalize contents font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[406px] not-italic text-[14px] text-black top-[815.07px]">
      <p className="absolute h-[18.854px] left-[406px] top-[815.07px] w-[84.324px]">Cluster 2</p>
      <p className="absolute h-[18.854px] left-[524.67px] top-[815.07px] w-[141.961px]">16</p>
      <p className="absolute h-[18.854px] left-[701.01px] top-[815.07px] w-[141.961px]">1,4</p>
      <p className="absolute h-[18.854px] left-[877.35px] top-[815.07px] w-[141.961px]">0,41</p>
      <p className="absolute h-[18.854px] left-[1053.7px] top-[815.07px] w-[141.961px]">2,54</p>
      <p className="absolute h-[18.854px] left-[1230.04px] top-[815.07px] w-[141.961px]">Jagung</p>
    </div>
  );
}

function Group30() {
  return (
    <div className="[word-break:break-word] absolute capitalize contents font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[406px] not-italic text-[14px] text-black top-[857.07px]">
      <p className="absolute h-[18.854px] left-[406px] top-[857.07px] w-[84.324px]">Cluster 3</p>
      <p className="absolute h-[18.854px] left-[524.67px] top-[857.07px] w-[141.961px]">10</p>
      <p className="absolute h-[18.854px] left-[701.01px] top-[857.07px] w-[141.961px]">0,6</p>
      <p className="absolute h-[18.854px] left-[877.35px] top-[857.07px] w-[141.961px]">0,24</p>
      <p className="absolute h-[18.854px] left-[1053.7px] top-[857.07px] w-[141.961px]">1,56</p>
      <p className="absolute h-[18.854px] left-[1230.04px] top-[857.07px] w-[141.961px]">ubi</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[835px] not-italic text-[14px] text-black top-[298px] uppercase">
      <p className="absolute left-[835px] top-[298px] w-[76.031px]">Cluster</p>
      <p className="absolute left-[1132px] top-[298px] w-[182.95px]">KOMODITAS DOMINAN</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="[word-break:break-word] absolute capitalize contents font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[855px] not-italic text-[14px] text-black top-[338px]">
      <p className="absolute left-[855px] top-[338px] w-[76.031px]">Cluster 1</p>
      <p className="absolute left-[1132px] top-[338px] w-[182.95px]">Padi</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="[word-break:break-word] absolute capitalize contents font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[855px] not-italic text-[14px] text-black top-[378px]">
      <p className="absolute left-[855px] top-[378px] w-[76.031px]">Cluster 2</p>
      <p className="absolute left-[1132px] top-[378px] w-[182.95px]">jagung</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="[word-break:break-word] absolute capitalize contents font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[855px] not-italic text-[14px] text-black top-[418px]">
      <p className="absolute left-[855px] top-[418px] w-[76.031px]">Cluster 3</p>
      <p className="absolute left-[1132px] top-[418px] w-[182.95px]">Ubi</p>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex h-[48px] items-center justify-center left-[793px] rounded-[15px] top-[581px] w-[612px]" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / jam-icons / outline & logos / pictures">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <path d={svgPaths.p35ed8f00} fill="#697077" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[14.78%_20.11%_32.39%_20.11%]" data-name="Group">
      <div className="absolute inset-[37.67%_39.54%_43.84%_39.54%]" data-name="Vector">
        <div className="absolute inset-[-1.4%_-1.09%_-0.79%_-1.09%]">
          <svg className="block size-full" fill="none" height="64.8081" preserveAspectRatio="none" viewBox="0 0 88.304 64.8081" width="88.304">
            <path d={svgPaths.p2d8e6100} id="Vector" stroke="#B0B8C4" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.35%_29.08%_37.67%_29.08%]" data-name="Vector">
        <div className="absolute inset-[-0.7%_-0.55%_-0.39%_-0.55%]">
          <svg className="block size-full" fill="none" height="128.228" preserveAspectRatio="none" viewBox="0 0 174.717 128.228" width="174.717">
            <path d={svgPaths.p333fa400} id="Vector" stroke="#B0B8C4" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[14.78%_20.11%_32.39%_20.11%]" data-name="Vector">
        <div className="absolute inset-[-0.49%_-0.38%_-0.28%_-0.38%]">
          <svg className="block size-full" fill="none" height="182.588" preserveAspectRatio="none" viewBox="0 0 248.785 182.588" width="248.785">
            <path d={svgPaths.p27b6d800} id="Vector" stroke="#B0B8C4" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[14.78%_20.11%_32.39%_20.11%]" data-name="Group">
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[14.78%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="120.8" preserveAspectRatio="none" viewBox="0 0 1 120.8" width="1">
            <path d="M0.5 120.8V0" id="Vector" stroke="#B0B8C4" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[32.39%] left-1/2 right-[20.11%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.74%_-0.18%]">
          <svg className="block size-full" fill="none" height="61.2982" preserveAspectRatio="none" viewBox="0 0 123.886 61.2982" width="123.886">
            <path d={svgPaths.p2568e968} id="Vector" stroke="#B0B8C4" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[32.39%] left-[20.11%] right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.74%_-0.18%]">
          <svg className="block size-full" fill="none" height="61.2982" preserveAspectRatio="none" viewBox="0 0 123.886 61.2982" width="123.886">
            <path d={svgPaths.p5f8fe80} id="Vector" stroke="#B0B8C4" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[14.78%_20.11%_32.39%_20.11%]" data-name="Group">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[14.78%_20.11%_32.39%_20.11%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[19.01%_26.39%_35.21%_24.89%]" data-name="Group">
      <div className="absolute inset-[19.01%_26.39%_35.21%_24.89%]" data-name="recharts-radar-_r_9_">
        <div className="absolute inset-[-1.17%_-0.89%_-0.65%_-0.93%]">
          <svg className="block size-full" fill="none" height="159.91" preserveAspectRatio="none" viewBox="0 0 204.895 159.91" width="204.895">
            <path d={svgPaths.p14591480} fill="#A2A9B0" fillOpacity="0.25" id="recharts-radar-_r_9_" stroke="#A2A9B0" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[19.01%_26.39%_35.21%_24.89%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[41.9%_41.63%_38.91%_31.17%]" data-name="Group">
      <div className="absolute inset-[41.9%_41.63%_38.91%_31.17%]" data-name="recharts-radar-_r_a_">
        <div className="absolute inset-[-2.19%_-1.59%_-2.56%_-3.15%]">
          <svg className="block size-full" fill="none" height="68.9575" preserveAspectRatio="none" viewBox="0 0 117.663 68.9575" width="117.663">
            <path d={svgPaths.p35bd5e00} fill="#C1C7CD" fillOpacity="0.2" id="recharts-radar-_r_a_" stroke="#C1C7CD" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[41.9%_41.63%_38.91%_31.17%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[46.48%_45.22%_43.13%_38.34%]" data-name="Group">
      <div className="absolute inset-[46.48%_45.22%_43.13%_38.34%]" data-name="recharts-radar-_r_b_">
        <div className="absolute inset-[-3.77%_-2.83%_-2.75%_-0.88%]">
          <svg className="block size-full" fill="none" height="37.9576" preserveAspectRatio="none" viewBox="0 0 70.4117 37.9576" width="70.4117">
            <path d={svgPaths.p38043c00} fill="#878D96" fillOpacity="0.2" id="recharts-radar-_r_b_" stroke="#878D96" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[46.48%_45.22%_43.13%_38.34%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[19.01%_26.39%_35.21%_24.89%]" data-name="Group">
      <Group5 />
      <Group7 />
      <Group9 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[6.12%_44.55%_84.87%_43.15%]" data-name="Group">
      <div className="absolute inset-[12.7%_50.7%_84.87%_49.3%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[6.12%_44.55%_89.33%_43.15%] leading-[normal] not-italic text-[#5f6d7e] text-[12px] text-center">Produksi</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[68.92%_10.41%_26.53%_71.16%]" data-name="Group">
      <div className="absolute inset-[70.06%_27.09%_28.73%_71.16%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[68.92%_10.41%_26.53%_72.91%] leading-[normal] not-italic text-[#5f6d7e] text-[12px]">Luas Panen</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[68.92%_71.91%_26.53%_8.23%]" data-name="Group">
      <div className="absolute inset-[70.06%_71.91%_28.73%_26.41%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[68.92%_73.59%_26.53%_8.23%] leading-[normal] not-italic text-[#5f6d7e] text-[12px] text-right">Produktivitas</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[6.12%_10.41%_26.53%_8.23%]" data-name="Group">
      <Group14 />
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[6.12%_10.41%_26.53%_8.23%]" data-name="Group">
      <div className="absolute inset-[15.13%_28.84%_29.94%_25.94%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <Group13 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[47.21%_48.43%_49.27%_49.88%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.21%_48.43%_49.27%_49.88%] leading-[normal] not-italic text-[#9ca3af] text-[10px]">0</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[34.82%_46.97%_61.66%_49.88%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[34.82%_46.97%_61.66%_49.88%] leading-[normal] not-italic text-[#9ca3af] text-[10px]">35</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[22.43%_47.22%_74.06%_49.88%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[22.43%_47.22%_74.06%_49.88%] leading-[normal] not-italic text-[#9ca3af] text-[10px]">70</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[11.8%_45.76%_84.68%_49.88%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[11.8%_45.76%_84.68%_49.88%] leading-[normal] not-italic text-[#9ca3af] text-[10px]">100</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[11.8%_45.76%_49.27%_49.88%]" data-name="Group">
      <Group19 />
      <Group20 />
      <Group21 />
      <Group22 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[11.8%_45.76%_49.27%_49.88%]" data-name="Group">
      <div className="absolute inset-[14.73%_50.12%_49.86%_49.88%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="121.451" preserveAspectRatio="none" viewBox="0 0 1 121.451" width="1">
            <path d="M0.5 121.451V0" id="Vector" stroke="#CCCCCC" />
          </svg>
        </div>
      </div>
      <Group18 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[6.12%_10.41%_26.53%_8.23%]" data-name="Group">
      <Group12 />
      <Group17 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[343px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
      <Group4 />
      <Group11 />
    </div>
  );
}

function IconCluster1LegendIcon() {
  return (
    <div className="absolute left-0 size-[14px] top-[7px]" data-name="Icon - Cluster 1 legend icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_531)" id="Icon - Cluster 1 legend icon">
          <path d="M0 -0.25H14V10.25H0V-0.25Z" fill="#A2A9B0" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_531">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Items() {
  return (
    <div className="absolute h-[24px] left-[94.48px] top-[287px] w-[66.688px]" data-name="Items">
      <IconCluster1LegendIcon />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[42px] not-italic text-[#5f6d7e] text-[12px] text-center top-[3px] whitespace-nowrap">Cluster 1</p>
    </div>
  );
}

function IconCluster2LegendIcon() {
  return (
    <div className="absolute left-[37px] size-[14px] top-[-19px]" data-name="Icon - Cluster 2 legend icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon - Cluster 2 legend icon">
          <path d="M0 1.75H14V12.25H0V1.75Z" fill="#C1C7CD" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Items1() {
  return (
    <div className="absolute h-[24px] left-[134.17px] top-[311px] w-[69.125px]" data-name="Items">
      <IconCluster2LegendIcon />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[81px] not-italic text-[#5f6d7e] text-[12px] text-center top-[-21px] whitespace-nowrap">Cluster 2</p>
    </div>
  );
}

function IconCluster3LegendIcon() {
  return (
    <div className="absolute left-0 size-[14px] top-[5px]" data-name="Icon - Cluster 3 legend icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon - Cluster 3 legend icon">
          <path d="M0 1.75H14V12.25H0V1.75Z" fill="#878D96" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Items2() {
  return (
    <div className="absolute h-[24px] left-[250.3px] top-[287px] w-[69.219px]" data-name="Items">
      <IconCluster3LegendIcon />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[44px] not-italic text-[#5f6d7e] text-[12px] text-center top-[3px] whitespace-nowrap">Cluster 3</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[343px] items-start relative shrink-0 w-[413px]" data-name="Container">
      <Icon />
      <Items />
      <Items1 />
      <Items2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[343.406px] items-start left-0 top-0 w-[350px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[343px] left-[-7px] right-[55px] top-[71px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[425px] left-[384px] rounded-[15px] top-[196px] w-[391px]" data-name="Container">
      <Container2 />
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
          <div className="bg-[#2a282f] drop-shadow-[0px_4px_9.5px_rgba(42,40,47,0.49)] relative rounded-[52px] shrink-0" data-name="Option">
            <div className="content-stretch flex items-start px-[20px] py-[10px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Perbandingan</p>
            </div>
          </div>
          <button className="cursor-pointer relative rounded-[52px] shrink-0" data-name="Option">
            <div className="content-stretch flex items-start px-[20px] py-[10px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-left whitespace-nowrap">Provinsi Anggota</p>
            </div>
          </button>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[425px] left-[380px] rounded-[15px] top-[204px] w-[398px]" />
      <div className="absolute bg-[#d9d9d9] h-[364px] left-[793px] rounded-[15px] top-[204px] w-[612px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] left-[829px] not-italic text-[#21272a] text-[16px] top-[233px] whitespace-nowrap">Komoditas Dominan per Cluster</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] left-[406px] not-italic text-[#21272a] text-[16px] top-[233px] whitespace-nowrap">Perbandingan Rata-rata Fitur per Cluster</p>
      <div className="absolute bg-[#d9d9d9] h-[331px] left-[380px] rounded-[15px] top-[643px] w-[1025px]" />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <div className="absolute h-0 left-[406px] top-[760px] w-[966px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 966 1" width="966">
            <line id="Line 16" stroke="black" strokeOpacity="0.07" x2="966" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[406px] top-[804px] w-[966px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 966 1" width="966">
            <line id="Line 16" stroke="black" strokeOpacity="0.07" x2="966" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[406px] top-[846px] w-[966px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 966 1" width="966">
            <line id="Line 16" stroke="black" strokeOpacity="0.07" x2="966" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[406px] top-[888px] w-[966px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 966 1" width="966">
            <line id="Line 16" stroke="black" strokeOpacity="0.07" x2="966" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] left-[406px] not-italic text-[#21272a] text-[16px] top-[670px] whitespace-pre">{`Statistik Rata-rata  per Cluster`}</p>
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <div className="absolute h-0 left-[833px] top-[328px] w-[539px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 539 1" width="539">
            <line id="Line 12" stroke="black" strokeOpacity="0.07" x2="539" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[833px] top-[368px] w-[539px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 539 1" width="539">
            <line id="Line 12" stroke="black" strokeOpacity="0.07" x2="539" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[833px] top-[408px] w-[539px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 539 1" width="539">
            <line id="Line 12" stroke="black" strokeOpacity="0.07" x2="539" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[833px] top-[448px] w-[539px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 539 1" width="539">
            <line id="Line 12" stroke="black" strokeOpacity="0.07" x2="539" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <IconContainer />
      <Container1 />
      <div className="absolute left-[838px] size-[10px] top-[342px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#A2A9B0" id="Ellipse 1" r="5" />
        </svg>
      </div>
      <div className="absolute left-[838px] size-[10px] top-[382px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#C1C7CD" id="Ellipse 2" r="5" />
        </svg>
      </div>
      <div className="absolute left-[838px] size-[10px] top-[422px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#878D96" id="Ellipse 3" r="5" />
        </svg>
      </div>
    </div>
  );
}