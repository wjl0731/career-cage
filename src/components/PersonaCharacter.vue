<script setup>
/**
 * 原创低多边形「狱友」角色 —— 每个结果称号对应一只，外加首页吉祥物 rookie。
 * 全部为手绘 SVG，非任何网站素材。统一画布 200 x 210。
 */
defineProps({
  id: { type: String, required: true }
})
</script>

<template>
  <svg viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg" class="select-none">
    <defs>
      <clipPath id="ccStand">
        <polygon points="83,94 117,94 113,150 87,150" />
      </clipPath>
      <clipPath id="ccBomb">
        <polygon points="86,96 114,96 112,132 88,132" />
      </clipPath>
      <clipPath id="ccZen">
        <polygon points="84,114 116,114 119,156 81,156" />
      </clipPath>
      <clipPath id="ccCap">
        <path d="M85 66 Q85 47 100 47 Q115 47 115 66 Z" />
      </clipPath>
    </defs>

    <!-- ============ ROOKIE 首页吉祥物：举囚号牌的新人 ============ -->
    <g v-if="id === 'rookie'">
      <ellipse cx="100" cy="196" rx="46" ry="7" fill="#000" opacity="0.07" />
      <polygon points="89,148 85,184 96,184 97,148" fill="#D8D8D8" />
      <polygon points="111,148 115,184 104,184 103,148" fill="#EDEDED" />
      <ellipse cx="90" cy="186" rx="9" ry="5" fill="#44474D" />
      <ellipse cx="110" cy="186" rx="9" ry="5" fill="#44474D" />
      <ellipse cx="89" cy="73" rx="3.5" ry="5" fill="#E3B68C" />
      <ellipse cx="111" cy="73" rx="3.5" ry="5" fill="#E3B68C" />
      <polygon points="83,94 117,94 113,150 87,150" fill="#EDEDED" />
      <polygon points="117,94 113,150 100,150 100,94" fill="#DCDCDC" />
      <g clip-path="url(#ccStand)">
        <rect x="80" y="100" width="44" height="8" fill="#353A40" />
        <rect x="80" y="116" width="44" height="8" fill="#353A40" />
        <rect x="80" y="132" width="44" height="8" fill="#353A40" />
      </g>
      <polygon points="83,96 72,118 79,122 90,100" fill="#E2E2E2" />
      <polygon points="117,96 128,118 121,122 110,100" fill="#E2E2E2" />
      <rect x="94" y="80" width="12" height="9" fill="#E3B68C" />
      <polygon points="88,68 91,57 109,57 112,68 107,83 93,83" fill="#F1C9A0" />
      <polygon points="112,68 107,83 100,83 100,57 109,57" fill="#E3B68C" />
      <path d="M85 66 Q85 47 100 47 Q115 47 115 66 Z" fill="#EDEDED" />
      <g clip-path="url(#ccCap)">
        <rect x="83" y="50" width="34" height="4" fill="#353A40" />
        <rect x="83" y="58" width="34" height="4" fill="#353A40" />
      </g>
      <rect x="83" y="64" width="34" height="5" rx="2.5" fill="#D8D8D8" />
      <circle cx="96" cy="71" r="2.6" fill="#2D2D2D" />
      <circle cx="106" cy="71" r="2.6" fill="#2D2D2D" />
      <circle cx="92" cy="77" r="3" fill="#FF6B6B" opacity="0.25" />
      <circle cx="110" cy="77" r="3" fill="#FF6B6B" opacity="0.25" />
      <path d="M96 78 Q100 81 105 78" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round" />
      <!-- 囚号牌 -->
      <rect x="60" y="116" width="80" height="42" rx="3" fill="#FBFBFB" stroke="#C9CDD2" stroke-width="2" />
      <rect x="60" y="116" width="80" height="13" rx="3" fill="#6C5CE7" />
      <text x="100" y="125" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">带薪服役登记处</text>
      <text x="100" y="144" text-anchor="middle" font-size="11" fill="#353A40" font-weight="800">编号 ?????</text>
      <text x="100" y="153" text-anchor="middle" font-size="7" fill="#9298A0">罪名：自愿续签</text>
      <circle cx="66" cy="120" r="5.5" fill="#F1C9A0" />
      <circle cx="134" cy="120" r="5.5" fill="#F1C9A0" />
    </g>

    <!-- ============ BOMB 随时引爆的工位炸弹 ============ -->
    <g v-else-if="id === 'bomb'">
      <ellipse cx="100" cy="196" rx="44" ry="7" fill="#000" opacity="0.07" />
      <!-- 炸弹 -->
      <circle cx="100" cy="158" r="34" fill="#2D2D2D" />
      <polygon points="100,124 134,158 100,158" fill="#3C3C3C" />
      <ellipse cx="88" cy="148" rx="9" ry="6" fill="#4A4A4A" />
      <rect x="92" y="119" width="16" height="11" rx="2" fill="#1C1C1C" />
      <path d="M100 119 Q88 104 102 96 Q115 89 110 79" stroke="#9A7B4F" stroke-width="4" fill="none" stroke-linecap="round" />
      <circle cx="111" cy="76" r="8" fill="#FFB02E" />
      <circle cx="111" cy="76" r="3.5" fill="#FF6B6B" />
      <!-- 坐在炸弹上的狱友 -->
      <polygon points="86,126 80,150 90,150 94,128" fill="#D8D8D8" />
      <polygon points="114,126 120,150 110,150 106,128" fill="#EDEDED" />
      <ellipse cx="83" cy="151" rx="7" ry="4" fill="#44474D" />
      <ellipse cx="117" cy="151" rx="7" ry="4" fill="#44474D" />
      <polygon points="86,96 114,96 112,132 88,132" fill="#EDEDED" />
      <polygon points="114,96 112,132 100,132 100,96" fill="#DCDCDC" />
      <g clip-path="url(#ccBomb)">
        <rect x="84" y="101" width="34" height="6" fill="#353A40" />
        <rect x="84" y="113" width="34" height="6" fill="#353A40" />
        <rect x="84" y="125" width="34" height="6" fill="#353A40" />
      </g>
      <!-- 惊慌举起的手臂 -->
      <polygon points="88,98 78,76 84,73 94,96" fill="#E2E2E2" />
      <polygon points="112,98 122,76 116,73 106,96" fill="#E2E2E2" />
      <circle cx="80" cy="73" r="5" fill="#F1C9A0" />
      <circle cx="120" cy="73" r="5" fill="#F1C9A0" />
      <rect x="94" y="82" width="12" height="9" fill="#E3B68C" />
      <ellipse cx="89" cy="71" rx="3.5" ry="5" fill="#E3B68C" />
      <ellipse cx="111" cy="71" rx="3.5" ry="5" fill="#E3B68C" />
      <polygon points="88,66 91,55 109,55 112,66 107,81 93,81" fill="#F1C9A0" />
      <polygon points="112,66 107,81 100,81 100,55 109,55" fill="#E3B68C" />
      <path d="M85 64 Q85 45 100 45 Q115 45 115 64 Z" fill="#EDEDED" />
      <g clip-path="url(#ccCap)" transform="translate(0,-2)">
        <rect x="83" y="50" width="34" height="4" fill="#353A40" />
        <rect x="83" y="58" width="34" height="4" fill="#353A40" />
      </g>
      <rect x="83" y="62" width="34" height="5" rx="2.5" fill="#D8D8D8" />
      <circle cx="95" cy="69" r="3.4" fill="#fff" />
      <circle cx="107" cy="69" r="3.4" fill="#fff" />
      <circle cx="95" cy="69" r="1.8" fill="#2D2D2D" />
      <circle cx="107" cy="69" r="1.8" fill="#2D2D2D" />
      <ellipse cx="101" cy="77" rx="3.5" ry="4" fill="#2D2D2D" />
      <path d="M118 64 q5 4 2 9" stroke="#4ECDC4" stroke-width="3" fill="none" stroke-linecap="round" />
    </g>

    <!-- ============ HARDDISK 正在格式化的硬盘 ============ -->
    <g v-else-if="id === 'harddisk'">
      <ellipse cx="100" cy="196" rx="46" ry="7" fill="#000" opacity="0.07" />
      <polygon points="89,148 85,184 96,184 97,148" fill="#D8D8D8" />
      <polygon points="111,148 115,184 104,184 103,148" fill="#EDEDED" />
      <ellipse cx="90" cy="186" rx="9" ry="5" fill="#44474D" />
      <ellipse cx="110" cy="186" rx="9" ry="5" fill="#44474D" />
      <polygon points="83,94 117,94 113,150 87,150" fill="#EDEDED" />
      <polygon points="117,94 113,150 100,150 100,94" fill="#DCDCDC" />
      <g clip-path="url(#ccStand)">
        <rect x="80" y="100" width="44" height="8" fill="#353A40" />
        <rect x="80" y="116" width="44" height="8" fill="#353A40" />
        <rect x="80" y="132" width="44" height="8" fill="#353A40" />
      </g>
      <polygon points="83,96 73,124 80,127 90,100" fill="#E2E2E2" />
      <polygon points="117,96 127,124 120,127 110,100" fill="#E2E2E2" />
      <circle cx="76" cy="126" r="5" fill="#F1C9A0" />
      <circle cx="124" cy="126" r="5" fill="#F1C9A0" />
      <rect x="94" y="84" width="12" height="9" fill="#E3B68C" />
      <!-- 显示器脑袋 -->
      <rect x="76" y="48" width="48" height="40" rx="6" fill="#2D3436" />
      <rect x="80" y="52" width="40" height="32" rx="3" fill="#1B2023" />
      <rect x="89" y="60" width="6" height="6" fill="#7BE0C0" />
      <rect x="105" y="60" width="6" height="6" fill="#7BE0C0" />
      <rect x="86" y="73" width="28" height="6" rx="3" fill="#4A4A4A" />
      <rect x="86" y="73" width="20" height="6" rx="3" fill="#FF6B6B" />
      <circle cx="119" cy="53" r="2" fill="#FFB02E" />
    </g>

    <!-- ============ FOSSIL 资深职场活化石 ============ -->
    <g v-else-if="id === 'fossil'">
      <ellipse cx="100" cy="196" rx="46" ry="7" fill="#000" opacity="0.07" />
      <polygon points="89,148 85,184 96,184 97,148" fill="#9EA4AB" />
      <polygon points="111,148 115,184 104,184 103,148" fill="#B7BCC2" />
      <ellipse cx="90" cy="186" rx="9" ry="5" fill="#6B6F76" />
      <ellipse cx="110" cy="186" rx="9" ry="5" fill="#6B6F76" />
      <polygon points="83,94 117,94 113,150 87,150" fill="#B7BCC2" />
      <polygon points="117,94 113,150 100,150 100,94" fill="#9EA4AB" />
      <g clip-path="url(#ccStand)">
        <rect x="80" y="100" width="44" height="8" fill="#6B7077" />
        <rect x="80" y="116" width="44" height="8" fill="#6B7077" />
        <rect x="80" y="132" width="44" height="8" fill="#6B7077" />
      </g>
      <path d="M104 96 l-7 10 l5 7 l-4 9" stroke="#7D8288" stroke-width="1.6" fill="none" />
      <polygon points="83,96 73,124 80,127 90,100" fill="#ADB2B8" />
      <polygon points="117,96 127,124 120,127 110,100" fill="#ADB2B8" />
      <circle cx="76" cy="126" r="5" fill="#9EA4AB" />
      <circle cx="124" cy="126" r="5" fill="#9EA4AB" />
      <rect x="94" y="84" width="12" height="9" fill="#9EA4AB" />
      <ellipse cx="89" cy="73" rx="3.5" ry="5" fill="#9EA4AB" />
      <ellipse cx="111" cy="73" rx="3.5" ry="5" fill="#9EA4AB" />
      <polygon points="88,68 91,57 109,57 112,68 107,83 93,83" fill="#B7BCC2" />
      <polygon points="112,68 107,83 100,83 100,57 109,57" fill="#9EA4AB" />
      <path d="M85 66 Q85 47 100 47 Q115 47 115 66 Z" fill="#C4C9CE" />
      <g clip-path="url(#ccCap)">
        <rect x="83" y="50" width="34" height="4" fill="#7D8288" />
        <rect x="83" y="58" width="34" height="4" fill="#7D8288" />
      </g>
      <rect x="83" y="64" width="34" height="5" rx="2.5" fill="#9EA4AB" />
      <path d="M96 64 l-4 7 l3 4" stroke="#8A9097" stroke-width="1.4" fill="none" />
      <rect x="93" y="71" width="6" height="2.4" rx="1" fill="#5A5F66" />
      <rect x="103" y="71" width="6" height="2.4" rx="1" fill="#5A5F66" />
      <path d="M95 79 Q100 76 105 79" stroke="#5A5F66" stroke-width="2" fill="none" stroke-linecap="round" />
      <!-- 蜘蛛网 -->
      <g stroke="#C9CDD2" stroke-width="1.1" fill="none">
        <path d="M4 4 L42 4 M4 4 L4 42 M4 4 L36 36" />
        <path d="M16 4 Q11 16 4 16" />
        <path d="M30 4 Q22 28 4 30" />
      </g>
      <!-- 肩头长出的小草 -->
      <path d="M86 95 Q82 86 86 80" stroke="#6BBF59" stroke-width="2.4" fill="none" stroke-linecap="round" />
      <ellipse cx="84" cy="80" rx="4" ry="2.4" fill="#6BBF59" transform="rotate(-35 84 80)" />
      <!-- 灰尘 -->
      <circle cx="60" cy="120" r="1.6" fill="#C9CDD2" />
      <circle cx="142" cy="138" r="1.6" fill="#C9CDD2" />
      <circle cx="138" cy="100" r="1.3" fill="#C9CDD2" />
    </g>

    <!-- ============ MONK 深谙摸鱼之道的扫地僧 ============ -->
    <g v-else-if="id === 'monk'">
      <ellipse cx="100" cy="196" rx="46" ry="7" fill="#000" opacity="0.07" />
      <!-- 扫帚 -->
      <rect x="131" y="74" width="4.5" height="112" rx="2.2" fill="#B07B43" />
      <polygon points="124,182 143,182 149,202 118,202" fill="#E3B96A" />
      <g stroke="#C99B4B" stroke-width="1.2">
        <line x1="128" y1="184" x2="124" y2="200" />
        <line x1="133" y1="184" x2="133" y2="201" />
        <line x1="138" y1="184" x2="142" y2="200" />
      </g>
      <polygon points="89,148 85,184 96,184 97,148" fill="#D8D8D8" />
      <polygon points="111,148 115,184 104,184 103,148" fill="#EDEDED" />
      <ellipse cx="90" cy="186" rx="9" ry="5" fill="#44474D" />
      <ellipse cx="110" cy="186" rx="9" ry="5" fill="#44474D" />
      <polygon points="83,94 117,94 113,150 87,150" fill="#EDEDED" />
      <polygon points="117,94 113,150 100,150 100,94" fill="#DCDCDC" />
      <g clip-path="url(#ccStand)">
        <rect x="80" y="100" width="44" height="8" fill="#353A40" />
        <rect x="80" y="116" width="44" height="8" fill="#353A40" />
        <rect x="80" y="132" width="44" height="8" fill="#353A40" />
      </g>
      <polygon points="83,96 71,126 78,129 90,100" fill="#E2E2E2" />
      <circle cx="74" cy="129" r="5" fill="#F1C9A0" />
      <!-- 右臂搭着扫帚 -->
      <polygon points="117,96 130,108 134,114 122,100" fill="#E2E2E2" />
      <circle cx="133" cy="114" r="5" fill="#F1C9A0" />
      <rect x="94" y="84" width="12" height="9" fill="#E3B68C" />
      <ellipse cx="89" cy="73" rx="3.5" ry="5" fill="#E3B68C" />
      <ellipse cx="111" cy="73" rx="3.5" ry="5" fill="#E3B68C" />
      <polygon points="88,68 91,57 109,57 112,68 107,83 93,83" fill="#F1C9A0" />
      <polygon points="112,68 107,83 100,83 100,57 109,57" fill="#E3B68C" />
      <path d="M85 66 Q85 47 100 47 Q115 47 115 66 Z" fill="#EDEDED" />
      <g clip-path="url(#ccCap)">
        <rect x="83" y="50" width="34" height="4" fill="#353A40" />
        <rect x="83" y="58" width="34" height="4" fill="#353A40" />
      </g>
      <rect x="83" y="64" width="34" height="5" rx="2.5" fill="#D8D8D8" />
      <!-- 墨镜 + 惬意笑 -->
      <rect x="89" y="69" width="22" height="7" rx="2" fill="#2D2D2D" />
      <rect x="99" y="71" width="2" height="2" fill="#2D2D2D" />
      <path d="M94 80 Q100 85 106 80" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round" />
      <!-- 脚边摸的鱼 -->
      <g>
        <ellipse cx="52" cy="180" rx="11" ry="6.5" fill="#6C5CE7" />
        <polygon points="42,180 33,174 33,186" fill="#6C5CE7" />
        <circle cx="58" cy="178" r="1.7" fill="#fff" />
        <path d="M40 168 q3 -4 6 0" stroke="#9AA0FF" stroke-width="2" fill="none" stroke-linecap="round" />
      </g>
    </g>

    <!-- ============ ZEN 已开悟的职场佛系隐士 ============ -->
    <g v-else-if="id === 'zen'">
      <ellipse cx="100" cy="190" rx="50" ry="8" fill="#000" opacity="0.07" />
      <!-- 光环 -->
      <path d="M78 44 Q100 30 122 44" stroke="#FFB02E" stroke-width="3.5" fill="none" stroke-linecap="round" />
      <circle cx="74" cy="48" r="2" fill="#FFB02E" />
      <circle cx="126" cy="48" r="2" fill="#FFB02E" />
      <!-- 盘腿底座 -->
      <polygon points="62,184 138,184 100,150" fill="#EDEDED" />
      <polygon points="100,150 138,184 100,184" fill="#DCDCDC" />
      <g>
        <rect x="70" y="170" width="60" height="6" fill="#353A40" />
        <rect x="80" y="158" width="40" height="6" fill="#353A40" />
      </g>
      <circle cx="74" cy="166" r="6" fill="#F1C9A0" />
      <circle cx="126" cy="166" r="6" fill="#F1C9A0" />
      <!-- 躯干 -->
      <polygon points="84,114 116,114 119,156 81,156" fill="#EDEDED" />
      <polygon points="116,114 119,156 100,156 100,114" fill="#DCDCDC" />
      <g clip-path="url(#ccZen)">
        <rect x="78" y="120" width="46" height="7" fill="#353A40" />
        <rect x="78" y="134" width="46" height="7" fill="#353A40" />
        <rect x="78" y="148" width="46" height="7" fill="#353A40" />
      </g>
      <polygon points="85,116 76,140 83,144 92,120" fill="#E2E2E2" />
      <polygon points="115,116 124,140 117,144 108,120" fill="#E2E2E2" />
      <rect x="94" y="103" width="12" height="9" fill="#E3B68C" />
      <ellipse cx="89" cy="92" rx="3.5" ry="5" fill="#E3B68C" />
      <ellipse cx="111" cy="92" rx="3.5" ry="5" fill="#E3B68C" />
      <polygon points="88,87 91,76 109,76 112,87 107,102 93,102" fill="#F1C9A0" />
      <polygon points="112,87 107,102 100,102 100,76 109,76" fill="#E3B68C" />
      <path d="M85 85 Q85 66 100 66 Q115 66 115 85 Z" fill="#EDEDED" />
      <g clip-path="url(#ccCap)" transform="translate(0,19)">
        <rect x="83" y="50" width="34" height="4" fill="#353A40" />
        <rect x="83" y="58" width="34" height="4" fill="#353A40" />
      </g>
      <rect x="83" y="83" width="34" height="5" rx="2.5" fill="#D8D8D8" />
      <path d="M93 90 Q96 93 99 90" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round" />
      <path d="M101 90 Q104 93 107 90" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round" />
      <path d="M95 97 Q100 100 105 97" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round" />
      <circle cx="68" cy="120" r="1.8" fill="#FFB02E" />
      <circle cx="132" cy="124" r="1.8" fill="#FFB02E" />
    </g>

    <!-- ============ PARACHUTE 挂在墙头的越狱预备役 ============ -->
    <g v-else-if="id === 'parachute'">
      <ellipse cx="100" cy="200" rx="36" ry="6" fill="#000" opacity="0.07" />
      <!-- 降落伞 -->
      <path d="M52 56 Q100 6 148 56 Q124 46 100 56 Q76 46 52 56 Z" fill="#6C5CE7" />
      <path d="M52 56 Q76 22 76 51 Q64 50 52 56 Z" fill="#5A4BD4" />
      <path d="M100 56 Q100 18 124 47 Q112 50 100 56 Z" fill="#5A4BD4" />
      <path d="M64 53 L90 92 M100 56 L100 92 M136 53 L110 92" stroke="#9AA0A6" stroke-width="1.5" fill="none" />
      <!-- 悬吊的狱友 -->
      <polygon points="92,150 89,182 97,182 98,150" fill="#D8D8D8" />
      <polygon points="108,150 111,182 103,182 102,150" fill="#EDEDED" />
      <ellipse cx="93" cy="184" rx="7" ry="4" fill="#44474D" />
      <ellipse cx="107" cy="184" rx="7" ry="4" fill="#44474D" />
      <polygon points="86,96 114,96 112,150 88,150" fill="#EDEDED" />
      <polygon points="114,96 112,150 100,150 100,96" fill="#DCDCDC" />
      <g clip-path="url(#ccStand)">
        <rect x="80" y="102" width="44" height="8" fill="#353A40" />
        <rect x="80" y="118" width="44" height="8" fill="#353A40" />
        <rect x="80" y="134" width="44" height="8" fill="#353A40" />
      </g>
      <!-- 背带 -->
      <path d="M90 96 L96 150 M110 96 L104 150" stroke="#FFB02E" stroke-width="3" fill="none" />
      <!-- 上举抓伞的手臂 -->
      <polygon points="88,98 84,74 90,72 94,96" fill="#E2E2E2" />
      <polygon points="112,98 116,74 110,72 106,96" fill="#E2E2E2" />
      <circle cx="87" cy="72" r="5" fill="#F1C9A0" />
      <circle cx="113" cy="72" r="5" fill="#F1C9A0" />
      <rect x="94" y="84" width="12" height="9" fill="#E3B68C" />
      <ellipse cx="89" cy="73" rx="3.5" ry="5" fill="#E3B68C" />
      <ellipse cx="111" cy="73" rx="3.5" ry="5" fill="#E3B68C" />
      <polygon points="88,68 91,57 109,57 112,68 107,83 93,83" fill="#F1C9A0" />
      <polygon points="112,68 107,83 100,83 100,57 109,57" fill="#E3B68C" />
      <path d="M85 66 Q85 47 100 47 Q115 47 115 66 Z" fill="#EDEDED" />
      <g clip-path="url(#ccCap)">
        <rect x="83" y="50" width="34" height="4" fill="#353A40" />
        <rect x="83" y="58" width="34" height="4" fill="#353A40" />
      </g>
      <rect x="83" y="64" width="34" height="5" rx="2.5" fill="#D8D8D8" />
      <circle cx="96" cy="70" r="2.8" fill="#2D2D2D" />
      <circle cx="106" cy="70" r="2.8" fill="#2D2D2D" />
      <circle cx="96.8" cy="69" r="0.9" fill="#fff" />
      <circle cx="106.8" cy="69" r="0.9" fill="#fff" />
      <path d="M95 76 Q100 82 106 76" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round" />
      <path d="M126 70 l4 -4 M128 78 l5 -2" stroke="#FFB02E" stroke-width="2" stroke-linecap="round" />
    </g>

    <!-- ============ PINGPONG 在牢笼里反复横跳的人 ============ -->
    <g v-else-if="id === 'pingpong'">
      <ellipse cx="100" cy="198" rx="30" ry="5" fill="#000" opacity="0.07" />
      <!-- 残影 -->
      <g opacity="0.16">
        <polygon points="69,92 99,92 95,146 73,146" fill="#6C5CE7" />
        <polygon points="101,92 131,92 127,146 105,146" fill="#6C5CE7" />
      </g>
      <!-- 动态弧线 -->
      <path d="M48 108 Q38 132 48 156" stroke="#C9C2F5" stroke-width="3.5" fill="none" stroke-linecap="round" />
      <path d="M40 114 Q33 132 40 150" stroke="#DEDAF8" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M152 108 Q162 132 152 156" stroke="#C9C2F5" stroke-width="3.5" fill="none" stroke-linecap="round" />
      <path d="M160 114 Q167 132 160 150" stroke="#DEDAF8" stroke-width="3" fill="none" stroke-linecap="round" />
      <polygon points="89,142 85,176 96,176 97,142" fill="#D8D8D8" />
      <polygon points="111,142 115,176 104,176 103,142" fill="#EDEDED" />
      <ellipse cx="90" cy="178" rx="9" ry="5" fill="#44474D" />
      <ellipse cx="110" cy="178" rx="9" ry="5" fill="#44474D" />
      <polygon points="83,88 117,88 113,144 87,144" fill="#EDEDED" />
      <polygon points="117,88 113,144 100,144 100,88" fill="#DCDCDC" />
      <g clip-path="url(#ccStand)" transform="translate(0,-6)">
        <rect x="80" y="100" width="44" height="8" fill="#353A40" />
        <rect x="80" y="116" width="44" height="8" fill="#353A40" />
        <rect x="80" y="132" width="44" height="8" fill="#353A40" />
      </g>
      <polygon points="83,90 71,70 77,67 90,86" fill="#E2E2E2" />
      <polygon points="117,90 129,114 122,118 110,92" fill="#E2E2E2" />
      <circle cx="74" cy="68" r="5" fill="#F1C9A0" />
      <circle cx="126" cy="116" r="5" fill="#F1C9A0" />
      <rect x="94" y="78" width="12" height="9" fill="#E3B68C" />
      <ellipse cx="89" cy="67" rx="3.5" ry="5" fill="#E3B68C" />
      <ellipse cx="111" cy="67" rx="3.5" ry="5" fill="#E3B68C" />
      <polygon points="88,62 91,51 109,51 112,62 107,77 93,77" fill="#F1C9A0" />
      <polygon points="112,62 107,77 100,77 100,51 109,51" fill="#E3B68C" />
      <path d="M85 60 Q85 41 100 41 Q115 41 115 60 Z" fill="#EDEDED" />
      <g clip-path="url(#ccCap)" transform="translate(0,-6)">
        <rect x="83" y="50" width="34" height="4" fill="#353A40" />
        <rect x="83" y="58" width="34" height="4" fill="#353A40" />
      </g>
      <rect x="83" y="58" width="34" height="5" rx="2.5" fill="#D8D8D8" />
      <circle cx="95" cy="65" r="2.6" fill="#2D2D2D" />
      <path d="M103 67 l3 -4 l3 4" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M94 73 q3 -3 6 0 q3 3 6 0" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round" />
      <text x="120" y="58" font-size="13" fill="#FFB02E" font-weight="800">?</text>
    </g>
  </svg>
</template>
