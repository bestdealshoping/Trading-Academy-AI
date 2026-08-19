// ==========================================
// TRADING ACADEMY AI
// Authentication System
// ==========================================


// ===============================
// REGISTER
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const username =
            document.getElementById("username").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("authMessage");


        // ===============================
        // VALIDATION
        // ===============================

        if (password !== confirmPassword) {

            message.className = "auth-message error";

            message.textContent =
                "Modpas yo pa menm.";

            return;
        }


        if (password.length < 8) {

            message.className = "auth-message error";

            message.textContent =
                "Modpas la dwe genyen omwen 8 karaktè.";

            return;
        }


        // ===============================
        // BUTTON
        // ===============================

        const button =
            registerForm.querySelector("button[type='submit']");

        button.disabled = true;

        button.textContent =
            "Kreyasyon kont...";


        try {

            // ===============================
            // SUPABASE SIGN UP
            // ===============================

            const { data, error } =
                await supabaseClient.auth.signUp({

                    email: email,

                    password: password,

                    options: {

                        data: {

                            full_name: fullName,

                            username: username

                        }

                    }

                });


            // ===============================
            // ERROR
            // ===============================

            if (error) {

                throw error;

            }


            // ===============================
            // SUCCESS
            // ===============================

            message.className =
                "auth-message success";


            if (data.session) {

                message.textContent =
                    "Kont ou kreye avèk siksè! Ou pral antre nan akademi an.";

                setTimeout(function () {

                    window.location.href =
                        "dashboard.html";

                }, 1500);

            } else {

                message.textContent =
                    "Kont ou kreye! Tanpri verifye imèl ou pou aktive kont lan.";

            }


        } catch (error) {

            console.error(
                "Registration error:",
                error
            );


            message.className =
                "auth-message error";


            message.textContent =
                "Erè: " + error.message;


        } finally {

            button.disabled = false;

            button.textContent =
                "Kreye kont";

        }

    });

}



// ===============================
// LOGIN
// ===============================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;


        const message =
            document.getElementById("authMessage");


        const button =
            loginForm.querySelector("button[type='submit']");


        button.disabled = true;

        button.textContent =
            "Koneksyon...";


        try {

            // ===============================
            // SUPABASE LOGIN
            // ===============================

            const { data, error } =
                await supabaseClient.auth.signInWithPassword({

                    email: email,

                    password: password

                });


            if (error) {

                throw error;

            }


            // ===============================
            // SUCCESS
            // ===============================

            message.className =
                "auth-message success";

            message.textContent =
                "Koneksyon reyisi!";


            setTimeout(function () {

                window.location.href =
                    "dashboard.html";

            }, 1000);


        } catch (error) {

            console.error(
                "Login error:",
                error
            );


            message.className =
                "auth-message error";


            message.textContent =
                "Email oswa modpas la pa kòrèk.";

        } finally {

            button.disabled = false;

            button.textContent =
                "Konekte";

        }

    });

}

async function checkCourseAccess(courseId) {

  const { data, error } = await supabase.rpc(
    'has_course_access',
    {
      p_user_id: currentUser.id,
      p_course_id: courseId
    }
  );

  if (error) {
    console.log(error);
    return false;
  }

  return data;
}