import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";

import OtherBusinessImage from "../OtherBusinessImage";
import BusinessDetails from "../BusinessDetails";
import ContactAdminCard from "./ContactAdminCard";
import SignupForm from "./SignupForm";
import PaymentPage from "./PaymentPage";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
// import ResetPassword from "./RestPassword";
import { useAuth } from "../Context/AuthContext";

const ITEMS_PER_PAGE = 10;

// -----------------------------------------------------------------------------
// Page range helper
// -----------------------------------------------------------------------------

const getPageRange = (current, total) => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let last;

  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta &&
        i <= current + delta)
    ) {
      range.push(i);
    }
  }

  range.forEach((i) => {
    if (last) {
      if (i - last === 2) {
        rangeWithDots.push(last + 1);
      } else if (i - last > 2) {
        rangeWithDots.push("...");
      }
    }

    rangeWithDots.push(i);
    last = i;
  });

  return rangeWithDots;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const BusinessMembers = ({
  otherBusinessItems,
}) => {

const {
  user,
  role,
  isAdmin,
  isMember,
  hasRole,
  isAuthenticated,
  loading: authLoading,
  logout,       // context version — clears user state too
  checkAuth,
} = useAuth();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  // ---------------------------------------------------------------------------
  // Browse state
  // ---------------------------------------------------------------------------

  const [selectedCategory, setSelectedCategory] =
    useState(null);

  const [selectedKeyword, setSelectedKeyword] =
    useState(null);

  const [paymentDone, setPaymentDone] =
    useState(false);
  const [authView, setAuthView] = useState("login");
  const [userMenuOpen, setUserMenuOpen] =
    useState(false);

  // ---------------------------------------------------------------------------
  // Categories
  // ---------------------------------------------------------------------------

  const categories = useMemo(() => {
    const map = new Map();

    otherBusinessItems.forEach((item) => {
      item.companies?.forEach((company) => {
        const name =
          company.category?.trim() ||
          "Other";

        if (!map.has(name)) {
          map.set(name, {
            name,
            count: 0,
            keywords: new Set(),
          });
        }

        const entry = map.get(name);

        entry.count += 1;

        (company.keywords || []).forEach(
          (keyword) => {
            entry.keywords.add(keyword);
          }
        );
      });
    });

    return Array.from(map.values())
      .map((category) => ({
        ...category,
        keywords: Array.from(
          category.keywords
        ).sort(),
      }))
      .sort((a, b) =>
        a.name.localeCompare(b.name)
      );
  }, [otherBusinessItems]);

  // ---------------------------------------------------------------------------
  // Search
  // ---------------------------------------------------------------------------

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) {
      return categories;
    }

    const lower =
      searchTerm.toLowerCase();

    return categories
      .map((category) => {
        if (
          category.name
            .toLowerCase()
            .includes(lower)
        ) {
          return category;
        }

        const matchingKeywords =
          category.keywords.filter(
            (keyword) =>
              keyword
                .toLowerCase()
                .includes(lower)
          );

        return matchingKeywords.length > 0
          ? {
              ...category,
              keywords:
                matchingKeywords,
            }
          : null;
      })
      .filter(Boolean);
  }, [categories, searchTerm]);

  // ---------------------------------------------------------------------------
  // Pagination
  // ---------------------------------------------------------------------------

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredCategories.length /
        ITEMS_PER_PAGE
    )
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [
    currentPage,
    totalPages,
  ]);

  const paginatedCategories =
    filteredCategories.slice(
      (currentPage - 1) *
        ITEMS_PER_PAGE,
      currentPage *
        ITEMS_PER_PAGE
    );

  const gridTopRef =
    useRef(null);

  const scrollToGridTop = () => {
    gridTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToPage = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    setCurrentPage(page);
    scrollToGridTop();
  };

  // ---------------------------------------------------------------------------
  // Browse handlers
  // ---------------------------------------------------------------------------

  const handleSelectCategory = (
    category
  ) => {
    const full =
      categories.find(
        (item) =>
          item.name === category.name
      ) || category;

    setSelectedCategory(full);
    setSelectedKeyword(null);
  };

  const handleSelectKeyword = (
    keyword
  ) => {
    setSelectedKeyword(keyword);
    setPaymentDone(false);
  };

  const handleBackToKeywords = () => {
    setSelectedKeyword(null);
    setPaymentDone(false);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedKeyword(null);
    setPaymentDone(false);
    setAuthView("login");
  };

  // ---------------------------------------------------------------------------
  // Login
  // ---------------------------------------------------------------------------
const handleLoggedIn = async () => {
  await checkAuth();
  setAuthView("login");
  setUserMenuOpen(false);
};

  // ---------------------------------------------------------------------------
  // Signup verification
  //
  // For frontend stage we receive the user data from SignupForm.
  // Backend authentication/session will be connected later.
  // ---------------------------------------------------------------------------

  const handleVerified = async () => {
  await checkAuth();
  setAuthView("login");
  setUserMenuOpen(false);
};

  // ---------------------------------------------------------------------------
  // Logout
  // ---------------------------------------------------------------------------

  const handleLogout = async () => {
  try {
    await logout();
  } catch (error) {
    console.error(
      "Logout error:",
      error
    );
  } finally {
    setUserMenuOpen(false);

    setSelectedCategory(null);
    setSelectedKeyword(null);
    setPaymentDone(false);

    setAuthView("login");
  }
};

  // ---------------------------------------------------------------------------
  // Payment
  // ---------------------------------------------------------------------------

  const handlePaid = () => {
    setPaymentDone(true);
  };

  // ---------------------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------------------

  const handleGoToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // ---------------------------------------------------------------------------
  // Loading authentication
  // ---------------------------------------------------------------------------

  if (authLoading) {
    return (
      <section
        id="members"
        className="bg-paper py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-center mb-10">
            <svg
              width="160"
              height="28"
              viewBox="0 0 160 28"
            >
              <line
                x1="20"
                y1="14"
                x2="140"
                y2="14"
                stroke="#C8973B"
                strokeWidth="1"
                strokeDasharray="3 5"
              />

              <circle
                cx="20"
                cy="14"
                r="4"
                fill="#1F5C57"
              />

              <circle
                cx="80"
                cy="14"
                r="3"
                fill="#C8973B"
              />

              <circle
                cx="140"
                cy="14"
                r="4"
                fill="#1F5C57"
              />
            </svg>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-soft">
              Checking login…
            </p>
          </div>

        </div>
      </section>
    );
  }

  // ---------------------------------------------------------------------------
  // Main render
  // ---------------------------------------------------------------------------

  return (
    <section
      id="members"
      className="bg-paper py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* ------------------------------------------------------------------ */}
        {/* Logged-in user - TOP RIGHT                                         */}
        {/* ------------------------------------------------------------------ */}

        {user && (
          <div className="flex justify-end mb-6 relative">

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setUserMenuOpen(
                    (open) => !open
                  )
                }
                className="
                  flex items-center gap-3
                  bg-white
                  border border-paper-line
                  rounded-full
                  px-3 py-2
                  shadow-sm
                  hover:border-gold
                  transition
                "
              >

                {/* Avatar */}

                <div
                  className="
                    w-8 h-8 rounded-full
                    bg-teal text-white
                    flex items-center
                    justify-center
                    text-xs font-semibold
                  "
                >
                  {user.name
                    ?.charAt(0)
                    ?.toUpperCase() || "U"}
                </div>

                {/* Name / email */}

                <div className="text-left hidden sm:block">

                  <p className="text-xs font-semibold text-ink">
                    {user.name ||
                      "User"}
                  </p>

                  <p className="text-[11px] text-slate-soft">
                    {user.email}
                  </p>

                </div>

                <span className="text-xs text-slate-soft">
                  ▾
                </span>

              </button>

              {/* Dropdown */}

              {userMenuOpen && (
                <div
                  className="
                    absolute right-0 mt-2
                    w-60
                    bg-white
                    border border-paper-line
                    rounded-2xl
                    shadow-lg
                    p-2
                    z-50
                  "
                >

                  <div className="px-3 py-2 border-b border-paper-line">

                    <p className="text-xs font-semibold text-ink">
                      {user.name ||
                        "User"}
                    </p>

                    <p className="text-[11px] text-slate-soft break-all">
                      {user.email}
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="
                      w-full
                      text-left
                      px-3 py-2 mt-1
                      text-xs font-semibold
                      text-red-600
                      rounded-xl
                      hover:bg-paper
                      transition
                    "
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* Section decoration                                                 */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex justify-center mb-10">

          <svg
            width="160"
            height="28"
            viewBox="0 0 160 28"
          >
            <line
              x1="20"
              y1="14"
              x2="140"
              y2="14"
              stroke="#C8973B"
              strokeWidth="1"
              strokeDasharray="3 5"
            />

            <circle
              cx="20"
              cy="14"
              r="4"
              fill="#1F5C57"
            />

            <circle
              cx="80"
              cy="14"
              r="3"
              fill="#C8973B"
            />

            <circle
              cx="140"
              cy="14"
              r="4"
              fill="#1F5C57"
            />
          </svg>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Header                                                              */}
        {/* ------------------------------------------------------------------ */}

        <div
          ref={gridTopRef}
          className="
            text-center
            mb-10
            scroll-mt-24
          "
        >

          <p className="eyebrow text-teal mb-3">
            BNI Referral Network
          </p>

          <h2 className="
            font-display
            font-semibold
            text-3xl md:text-4xl
            text-ink
            mb-4
          ">
            Business Members
          </h2>

          <p className="
            text-slate-soft
            font-body
            max-w-xl
            mx-auto
            text-sm md:text-base
          ">
            Browse by category, then by
            service — reach out to the
            chapter admin to get connected
            with the right member.
          </p>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Search                                                              */}
        {/* ------------------------------------------------------------------ */}

        {!selectedCategory && (
          <>
            <div className="mb-3 flex justify-center">

              <input
                type="text"
                placeholder="Search by category or service..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
                className="
                  border
                  border-paper-line
                  bg-white
                  rounded-full
                  px-5 py-3
                  w-full md:w-[28rem]
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-gold/50
                  transition
                "
              />

            </div>

            <p className="
              text-center
              text-xs
              text-slate-soft
              font-mono
              mb-8
            ">
              {filteredCategories.length}{" "}
              categor
              {filteredCategories.length !== 1
                ? "ies"
                : "y"}

              {totalPages > 1 &&
                ` · page ${currentPage} of ${totalPages}`}
            </p>
          </>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* Main content                                                        */}
        {/* ------------------------------------------------------------------ */}

        <div className="min-h-[50vh]">

          {/* -------------------------------------------------------------- */}
          {/* Not logged in + category selected                               */}
          {/* -------------------------------------------------------------- */}

          {selectedCategory &&
          !user ? (
            <>
              {authView === "login" && (
                <LoginForm
                  onLoggedIn={
                    handleLoggedIn
                  }
                  onSignup={() =>
                    setAuthView(
                      "signup"
                    )
                  }
                  onForgotPassword={() =>
                    setAuthView(
                      "forgot"
                    )
                  }
                  onCancel={
                    handleBackToCategories
                  }
                />
              )}

              {authView === "signup" && (
                <SignupForm
                  onVerified={
                    handleVerified
                  }
                  onCancel={() =>
                    setAuthView(
                      "login"
                    )
                  }
                />
              )}

              {authView === "forgot" && (
                <ForgotPasswordForm
                  onBack={() =>
                    setAuthView(
                      "login"
                    )
                  }
                  onCancel={
                    handleBackToCategories
                  }
                />
              )}
            </>
          ) : selectedKeyword &&
            paymentDone ? (

            <ContactAdminCard
              keyword={
                selectedKeyword
              }
              category={
                selectedCategory
              }
              onBackToKeywords={
                handleBackToKeywords
              }
              onBackToCategories={
                handleBackToCategories
              }
              onGoToContact={
                handleGoToContact
              }
            />

          ) : selectedKeyword ? (

            <PaymentPage
              keyword={
                selectedKeyword
              }
              category={
                selectedCategory
              }
              onPaid={handlePaid}
              onBack={
                handleBackToKeywords
              }
            />

          ) : selectedCategory ? (

            <BusinessDetails
              category={
                selectedCategory
              }
              onSelectKeyword={
                handleSelectKeyword
              }
              onBack={
                handleBackToCategories
              }
            />

          ) : (

            <>
              <OtherBusinessImage
                categories={
                  paginatedCategories
                }
                onSelectCategory={
                  handleSelectCategory
                }
              />

              {/* Pagination */}

              {totalPages > 1 && (
                <div className="
                  flex
                  flex-wrap
                  justify-center
                  items-center
                  gap-2
                  mt-12
                ">

                  <button
                    onClick={() =>
                      goToPage(
                        currentPage - 1
                      )
                    }
                    disabled={
                      currentPage === 1
                    }
                    className="
                      px-3 py-2
                      rounded-full
                      text-xs
                      font-semibold
                      border
                      border-paper-line
                      bg-white
                      disabled:opacity-40
                      disabled:cursor-not-allowed
                      hover:border-gold
                      transition
                    "
                  >
                    ← Prev
                  </button>

                  {getPageRange(
                    currentPage,
                    totalPages
                  ).map((page, index) =>
                    page === "..." ? (
                      <span
                        key={`dots-${index}`}
                        className="
                          px-2
                          text-slate-soft
                          text-xs
                        "
                      >
                        …
                      </span>
                    ) : (
                      <button
                        key={page}
                        onClick={() =>
                          goToPage(page)
                        }
                        className={`
                          w-9 h-9
                          rounded-full
                          text-xs
                          font-mono
                          font-semibold
                          transition
                          ${
                            page ===
                            currentPage
                              ? "bg-gold text-ink"
                              : "bg-white border border-paper-line text-slate hover:border-gold"
                          }
                        `}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    onClick={() =>
                      goToPage(
                        currentPage + 1
                      )
                    }
                    disabled={
                      currentPage ===
                      totalPages
                    }
                    className="
                      px-3 py-2
                      rounded-full
                      text-xs
                      font-semibold
                      border
                      border-paper-line
                      bg-white
                      disabled:opacity-40
                      disabled:cursor-not-allowed
                      hover:border-gold
                      transition
                    "
                  >
                    Next →
                  </button>

                </div>
              )}

            </>
          )}

        </div>

      </div>
    </section>
  );
};

export default BusinessMembers;