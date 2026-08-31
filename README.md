# ILUMEE — Awaken Your True Power

Frontend production-grade cho **ILUMEE** — bộ 3 công cụ huyền học (Soul Plan · Human Design · Thần số học) + dịch vụ (Lớp học · Readings · Package · Mentorship). 3 ngôn ngữ (VI/EN/FR), deploy Netlify.

> Xem [ilumee-web-build-spec.md](../ilumee-web-build-spec.md) để biết chi tiết build spec.

---

## Tech stack

- **Next.js 15 App Router** + TypeScript
- **Tailwind CSS 4** + **shadcn/ui**
- **next-intl** (i18n routing `/[locale]/...` 3 locales: vi, en, fr)
- **Three.js + @react-three/fiber + @react-three/drei** cho BodyGraph 3D
- **lucide-react** icons
- **Next.js Route Handlers** làm mock API (dev) — không cần backend giai đoạn 1

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000 → redirect /vi
npm run build      # production build
npm run start      # serve build
npm run lint
```

## Cài đặt lần đầu

Vì workspace Documents/Ilumee không có `node_modules`, bạn cần cài từ terminal:

```bash
cd /Users/kimssa/Documents/Ilumee/ilumee-web
npm install
npm run dev
```

> Lưu ý khi cài:
> - Đảm bảo `npm install` không bị EPERM (clear cache nếu cần: `npm cache clean --force`).
> - Nếu gặp lỗi trên macOS, thử `sudo chown -R $USER:staff ~/.npm` rồi thử lại.
> - Nếu Network permission, cần `FULL_NETWORK` permission trong môi trường sandbox.

## Deploy lên Netlify

1. Push repo lên GitHub
2. Vào [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import existing project" → chọn repo
3. Netlify auto-detect Next.js (zero-config) nhờ `netlify.toml`
4. Build chạy `npm run build`; output publish `.next/`

**Environment variables (optional trên Netlify dashboard):**
- `NETLIFY_NEXT_SKEW_PROTECTION=true` — bảo vệ user đang truy cập khi deploy mới
- `NEXT_PUBLIC_API_BASE_URL=https://api.ilumee.com/api/v1` — khi backend thật sẵn sàng
- `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/ilumee/intro` — URL Calendly

## Cấu trúc

```
app/[locale]/
  ├── page.tsx                          # Homepage
  ├── about/, blog/, contact/, legal/
  ├── tools/                            # Hub giới thiệu 3 công cụ
  ├── calculate/
  │   ├── human-design/                 # Flow chính: form → 3D bodygraph → giải thích → recommend
  │   ├── soul-plan/
  │   └── numerology/
  ├── services/
  │   ├── classes/, readings/, package/, mentorship/
app/api/v1/                             # Mock Route Handlers
components/{layout, home, calculator, bodygraph3d, services, ui}/
lib/{mock-hd, mock-soulplan, mock-numerology, packages, education, ...}/
messages/{vi,en,fr}.json                # next-intl dictionaries
i18n/{routing, request}.ts
```

## Luồng Human Design (chính)

`/vi/calculate/human-design` → Form → POST `/api/v1/hd/calculate` (mock) → render 8 tầng:

1. BodyGraph 3D (R3F — 9 centers + 36 channels, OrbitControls) hoặc 2D SVG fallback
2. Card Type + Strategy + Authority
3. Card Profile + Definition + Incarnation Cross
4. Card Variables (Digestion / Environment / Awareness / Perspective)
5. Danh sách 9 Centers
6. Channels list
7. Bảng 64 Gates × hành tinh (Personality + Design)
8. Education + **Recommend 6 packages** theo rule Type+Profile

## Brand

ILUMEE — "Awaken Your True Power". Bảng màu:

- Primary (magenta) `#b21267`
- Accent (gold) `#e0b755`
- Ivory (main bg) `#f8eed8`

Font: Cormorant Garamond (display) + Montserrat (body).

## Tham khảo

- BodyGraph 9 centers coordinates dựa trên Human Design system (Ra Uru Hu)
- Repo tham khảo: https://github.com/dturkuler/humandesign_api và https://github.com/Gonzih/hd-bodygraph

## License

Proprietary — All rights reserved.
