const local = require('./localStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    // serializeUser는 req.session객체에 어떤 데이터를 저장할지 선택함
    // 사용자 정보 객체를 세션에 아이디로 저장
    passport.serializeUser((user, done) => {
        done(null, user.user_email);
        // user.id는 아래 .deserializeUser((id, done))의 id로 간다.
    });

    // deserializeUser는 매 요청 시 실행됨.
    // 어떻게? -> passport.session()미들웨어가 메서드를 호출함
    // 세션에 저장한 아이디를 통해 사용자 정보 객체를 불러옴
    passport.deserializeUser((user_email, done) => {
        User.findOne({ where: { user_email: user_email } })
        .then(user => done(null, user))
        // done(null, user)의 user은 req.user에 저장된다.
        .catch(err => done(err));
    });

    local(passport);
    // 전체적 과정
    // 1. 로그인 요청이 들어옴
    // 2. passport.authenticate 메서드 호출
    // 3. 로그인 전략 수행
    // 4. 로그인 성공 시 사용자 정보 객체와 함께 req.login 호출
    // 5. req.login 메서드가 passport.serializeUser 호출
    // 6. req.session에 사용자 아이디만 저장
    // 7. 로그인 완료

    // 로그인 이후의 과정
    // 1. 모든 요청에 passport.session() 미들웨어가 passport.deserializeUser 메서드 호출
    // 2. req.session에 저장된 아이디로 데이터베이스에서 사용자 조회
    // 3. 조회된 사용자 정보를 req.user에 저장
    // 4. 라우터에서 req.user 객체 사용 가능
}