const RateLimit = require("express-rate-limit");

//* 사용량 제한 미들웨어. 도스 공격 방지
exports.apiLimiter = new RateLimit({
    windowMs: 60 * 1000, // 1분 간격
    max: 5, // windowMs동안 최대 호출 횟수
    handler(req, res) {
        // 제한 초과 시 콜백 함수
        res.status(this.statusCode).json({
            code: this.statusCode, // statusCode 기본값은 429
            message: "1분에 5번만 요청 할 수 있습니다.",
        });
    },
});
