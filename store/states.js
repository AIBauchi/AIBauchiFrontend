const base_host = "https://aibauchi-backend-matt-wisdom.koyeb.app"

function relativeDays(datestring) {
  let timestamp = (new Date(datestring)).getTime()
  const rtf = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / oneDayInMs,
  );

  return rtf.format(daysDifference, 'day');
}
export const state = () => ({
    show_sm_navbar: false,
    base_host: base_host,
    base_url: `${base_host}/api/aisaturdaybauchi-plural`,
    base_updates_url: `${base_host}/api/latest-updates-plural`,
    base_ext_url: `${base_host}/api/external-resources-plural`,
    base_res_url: `${base_host}/api/resources-plural`,
    base_teams_url: `${base_host}/api/teams-plural`,
    base_feat_url: `${base_host}/api/featureds`,
    base_comments_url: `${base_host}/api/comments/api::aisaturdaybauchi-1.aisaturdaybauchi-1:`,
    auth_token: "",
    default_image: "/uploads/thumbnail_path1276_e3320fa1e3.png",
    to_relative_days: relativeDays,
    article: {}
  })
  
  export const mutations = {
    change_state (state, value) {
      state.show_sm_navbar = value
    },
  }
