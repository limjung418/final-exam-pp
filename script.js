function changeTitleColor() {
  document.getElementById('mainTitle').style.color = 'yellow'
}

function checkStudy() {
  let score = 90

  if (score >= 80) {
    document.getElementById('studyResult').innerHTML =
      'HTML, CSS, JavaScript를 열심히 학습했습니다.'
  } else {
    document.getElementById('studyResult').innerHTML =
      '더 많은 연습이 필요합니다.'
  }
}

function showProject() {
  document.getElementById('projectText').innerHTML =
    'GitHub와 Vercel을 활용하여 팀 프로젝트를 직접 관리하고 배포했습니다.'
}

function showBlog() {
  document.getElementById('blogText').innerHTML =
    '블로그에는 수업에서 배운 과정들과 중간,기말,과제 등을 모두 기록하였습니다'
}
